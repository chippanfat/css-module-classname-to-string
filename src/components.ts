// eslint-disable-next-line node/no-missing-import
import { readdir, readFile } from "node:fs/promises";

export default class Components {
  private readonly extensions: string[] = ["ts"];
  private readonly styleExtensions: string[] = ["css", "less", "scss"];
  constructor(private readonly folderList: string[]) {}

  async handleFile(file: string, styleModule: string): Promise<void> {
    const content = await readFile(file, "utf8");
    console.log(content.split("\n"));
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
