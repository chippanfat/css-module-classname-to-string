// eslint-disable-next-line node/no-missing-import
import { readdir, readFile, unlink, writeFile } from "node:fs/promises";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as config from "../package.json";

export default class Components {
  private readonly extensions: string[] = config.config.files.components;
  private readonly styleExtensions: string[] = config.config.files.styles;

  constructor(private readonly folderList: string[]) {}

  private static removeClassNames(
    content: string[],
    styleModule: string
  ): string[] {
    const newContent: string[] = [];
    for (const line of content) {
      const regex = new RegExp(
        "className=\\{(" + styleModule + ".([a-zA-Z]+))}"
      );
      const matcher = regex.exec(line);

      if (matcher === null) {
        newContent.push(line);
      } else {
        newContent.push(line.replace(`{${matcher[1]}}`, `"${matcher[2]}"`));
      }
    }

    return newContent;
  }

  private static removeStyleImportFromComponent(
    content: string[],
    importString: string
  ): string[] {
    for (const [index, line] of content.entries()) {
      if (line.includes(importString)) {
        content.splice(index, 1);
      }
    }

    return content;
  }

  private static async convertComponents(
    file: string,
    styleModule: string,
    styleImport: string
  ): Promise<void> {
    let fileContent: string[];
    const content = await Components.getFileContent(file);
    fileContent = Components.removeClassNames(content, styleModule);
    fileContent = Components.removeStyleImportFromComponent(
      fileContent,
      styleImport
    );

    await writeFile(file, fileContent.join("\n"), {
      encoding: "utf8",
      flag: "w+",
    });
  }

  private static async getFileContent(file: string): Promise<string[]> {
    const content = await readFile(file, "utf8");
    return content.split("\n");
  }

  private static async getStyleImport(
    file: string,
    styleModule: string
  ): Promise<RegExpExecArray | undefined> {
    const content = await Components.getFileContent(file);
    for (const line of content) {
      const regex = new RegExp(
        "import\\s([a-zA-Z]+)\\sfrom\\s[\\'|\\\"].*(" +
          styleModule +
          ")[\\'|\\\"]",
        ""
      );

      const matcher = regex.exec(line);
      if (matcher !== null) {
        return matcher;
      }
    }

    return undefined;
  }

  async handleFile(file: string, styleModule: string): Promise<void> {
    const styles = await Components.getStyleImport(file, styleModule);

    if (typeof styles !== "undefined") {
      await Components.convertComponents(file, styles[1], styles[0]);
    }
  }

  private getStyleModuleForComponent = (files: string[]) => {
    for (const extension of this.styleExtensions) {
      for (const file of files) {
        if (file.includes(extension)) {
          return file;
        }
      }
    }
  };

  private static async removeStyleModuleFile(path: string): Promise<void> {
    await unlink(path);
  }

  async processFiles(folder: string): Promise<void> {
    const files: string[] = await readdir(folder);

    for (const extension of this.extensions) {
      const file = files.find((name) => name.includes(extension));
      if (!file) {
        continue;
      }

      const styleModule = this.getStyleModuleForComponent(files);
      if (!styleModule) {
        throw new Error("Cannot work out what style sheet name to use");
      }

      await this.handleFile(`${folder}/${file}`, styleModule);
      await Components.removeStyleModuleFile(`${folder}/${styleModule}`);
    }
  }

  async convertModulesToString(): Promise<void> {
    for (const directory of this.folderList) {
      await this.processFiles(directory);
    }
  }
}
