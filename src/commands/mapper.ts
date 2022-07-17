import { Command, Flags } from "@oclif/core";
import Files from "../files";
import Components from "../components";
import Styles from "../styles";

export default class Mapper extends Command {
  static description = "describe the command here";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static flags = {
    path: Flags.string({ char: "p", description: "path to project" }),
    root: Flags.string({
      char: "r",
      description: "root path for global stylesheet",
    }),
    file: Flags.string({
      char: "f",
      description: "the global stylesheet name",
    }),
  };

  public async run(): Promise<void> {
    const { flags } = await this.parse(Mapper);

    const { path, root, file } = flags;

    if (!path || !root || !file) {
      throw new Error("Not all arguments are defined");
    }

    const files = new Files(path, root, file);

    const globalStylesheet = await files.createGlobalStylesheet();
    const fileList = await files.getFoldersWithStyles();

    const components = new Components(fileList);
    const classNames = await components.convertModulesToString();

    const styles = new Styles(fileList, globalStylesheet, classNames);
    await styles.convertModulesToString();
  }
}
