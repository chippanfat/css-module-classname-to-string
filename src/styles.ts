import * as config from "../package.json";
import { readdir, readFile, unlink } from "node:fs/promises";
import { createWriteStream, WriteStream } from "node:fs";

export default class Styles {
  private readonly styleExtensions: string[] = config.config.files.styles;

  constructor(
    private readonly folderList: string[],
    private readonly globalStyleSheet: string,
    private readonly classNameMap: Map<string, string>
  ) {}

  private getStylesInModule(line: string): RegExpExecArray | undefined {
    const regex = new RegExp("(\\.-?(?!ant)[_a-zA-Z]+[_a-zA-Z0-9-]*\\s*)", "");

    const matcher = regex.exec(line);

    return matcher === null ? undefined : matcher;
  }

  async handleFile(path: string, stream: WriteStream): Promise<void> {
    const content = await readFile(path, "utf-8");
    stream.write(`/* ${path} */ \n`);
    stream.write(content + "\n");

    await unlink(path);
  }

  async processFiles(folder: string): Promise<void> {
    const files: string[] = await readdir(folder);
    for (const extension of this.styleExtensions) {
      const file = files.find((name) => name.includes(extension));
      if (!file) {
        continue;
      }

      const stream = createWriteStream(this.globalStyleSheet, { flags: "a" });
      await this.handleFile(`${folder}/${file}`, stream);
      stream.end();
    }
  }

  async convertModulesToString(): Promise<void> {
    for (const directory of this.folderList) {
      await this.processFiles(directory);
    }
  }
}
