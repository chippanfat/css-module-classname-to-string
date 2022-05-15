// eslint-disable-next-line node/no-missing-import
import { readdir, open } from "node:fs/promises";
// eslint-disable-next-line node/no-missing-import
// import { statSync, closeSync, openSync } from "node:fs";

export default class Components {
  constructor(
    private readonly fileList: string[],
    private readonly extensions: string[] = ["ts"]
  ) {}

  async handleFile(file: string): Promise<void> {
    const content = await open(file, "r+");
  }

  async convertModulesToString(): Promise<void> {
    const directories: string[] = await readdir(this.fileList[0]);

    for (const extension of this.extensions) {
      const file = directories.find((name) => name.includes(extension));
      if (!file) {
        continue;
      }

      // eslint-disable-next-line no-await-in-loop
      await this.handleFile(file);
    }
  }
}
