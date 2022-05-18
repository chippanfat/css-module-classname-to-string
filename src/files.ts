// eslint-disable-next-line node/no-missing-import
import { readdir } from "node:fs/promises";
// eslint-disable-next-line node/no-missing-import
import { statSync, closeSync, openSync } from "node:fs";

export default class Files {
  private readonly fileExtensions: string[] = ["less", "css", "scss"];

  constructor(
    private readonly path: string,
    private readonly root: string,
    private readonly globalFile: string
  ) {}

  private checkFileForExtensions = (file: string): boolean => {
    for (const extension of this.fileExtensions) {
      if (file.includes(extension)) {
        return true;
      }
    }

    return false;
  };

  private async getFiles(path: string, files: string[]): Promise<string[]> {
    const folders = await readdir(path);
    for (const folder of folders) {
      const currentPath = `${path}/${folder}`;
      if (statSync(currentPath).isDirectory()) {
        // eslint-disable-next-line no-await-in-loop
        await this.getFiles(currentPath, files);
      }

      if (
        statSync(currentPath).isFile() &&
        this.checkFileForExtensions(currentPath) &&
        !files.includes(path)
      ) {
        files.push(path);
      }
    }

    return files;
  }

  async getFoldersWithStyles(): Promise<string[]> {
    return this.getFiles(this.path, []);
  }

  async createGlobalStylesheet(): Promise<void> {
    const file = `${this.root}/${this.globalFile}`;

    if (!statSync(file).isFile()) {
      closeSync(openSync(file, "w"));
    }
  }
}
