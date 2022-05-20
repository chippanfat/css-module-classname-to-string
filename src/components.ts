// eslint-disable-next-line node/no-missing-import
import { readdir, readFile, writeFile } from "node:fs/promises";

export default class Components {
  private readonly extensions: string[] = ["ts"];
  private readonly styleExtensions: string[] = ["css", "less", "scss"];

  constructor(private readonly folderList: string[]) {}

  private static async convertClassNamesToString(
    file: string,
    styleModule: string
  ): Promise<void> {
    const content = await Components.getFileContent(file);
    const newFile: string[] = [];
    let shouldWriteFile = false;

    for (const line of content) {
      const regex = new RegExp(
        "className=\\{(" + styleModule + ".([a-zA-Z]+))}"
      );
      const matcher = regex.exec(line);

      if (matcher === null) {
        newFile.push(line);
      } else {
        shouldWriteFile = true;
        newFile.push(line.replace(`{${matcher[1]}}`, `"${matcher[2]}"`));
      }
    }

    if (shouldWriteFile) {
      await writeFile(file, newFile.join("\n"), {
        encoding: "utf8",
        flag: "w+",
      });
    }
  }

  private static async getFileContent(file: string): Promise<string[]> {
    const content = await readFile(file, "utf8");
    return content.split("\n");
  }

  private static async getStyleImport(
    file: string,
    styleModule: string
  ): Promise<RegExpExecArray> {
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

    throw new Error("Unable to find style import");
  }

  private removeStyleImportFromComponent() {}

  async handleFile(file: string, styleModule: string): Promise<void> {
    const styles = await Components.getStyleImport(file, styleModule);
    await Components.convertClassNamesToString(file, styles[1]);
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
    }
  }

  async convertModulesToString(): Promise<void> {
    // for (const directory of this.folderList) {
    await this.processFiles(this.folderList[0]);
    // }
  }
}
