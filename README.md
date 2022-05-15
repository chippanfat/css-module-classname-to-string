oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g css-module-classname-to-string
$ css-module-classname-to-string COMMAND
running command...
$ css-module-classname-to-string (--version)
css-module-classname-to-string/0.0.0 linux-x64 node-v16.13.0
$ css-module-classname-to-string --help [COMMAND]
USAGE
  $ css-module-classname-to-string COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`css-module-classname-to-string hello PERSON`](#css-module-classname-to-string-hello-person)
* [`css-module-classname-to-string hello world`](#css-module-classname-to-string-hello-world)
* [`css-module-classname-to-string help [COMMAND]`](#css-module-classname-to-string-help-command)
* [`css-module-classname-to-string plugins`](#css-module-classname-to-string-plugins)
* [`css-module-classname-to-string plugins:install PLUGIN...`](#css-module-classname-to-string-pluginsinstall-plugin)
* [`css-module-classname-to-string plugins:inspect PLUGIN...`](#css-module-classname-to-string-pluginsinspect-plugin)
* [`css-module-classname-to-string plugins:install PLUGIN...`](#css-module-classname-to-string-pluginsinstall-plugin-1)
* [`css-module-classname-to-string plugins:link PLUGIN`](#css-module-classname-to-string-pluginslink-plugin)
* [`css-module-classname-to-string plugins:uninstall PLUGIN...`](#css-module-classname-to-string-pluginsuninstall-plugin)
* [`css-module-classname-to-string plugins:uninstall PLUGIN...`](#css-module-classname-to-string-pluginsuninstall-plugin-1)
* [`css-module-classname-to-string plugins:uninstall PLUGIN...`](#css-module-classname-to-string-pluginsuninstall-plugin-2)
* [`css-module-classname-to-string plugins update`](#css-module-classname-to-string-plugins-update)

## `css-module-classname-to-string hello PERSON`

Say hello

```
USAGE
  $ css-module-classname-to-string hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/chippanfat/css-module-classname-to-string/blob/v0.0.0/dist/commands/hello/index.ts)_

## `css-module-classname-to-string hello world`

Say hello world

```
USAGE
  $ css-module-classname-to-string hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `css-module-classname-to-string help [COMMAND]`

Display help for css-module-classname-to-string.

```
USAGE
  $ css-module-classname-to-string help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for css-module-classname-to-string.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `css-module-classname-to-string plugins`

List installed plugins.

```
USAGE
  $ css-module-classname-to-string plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ css-module-classname-to-string plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `css-module-classname-to-string plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ css-module-classname-to-string plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ css-module-classname-to-string plugins add

EXAMPLES
  $ css-module-classname-to-string plugins:install myplugin 

  $ css-module-classname-to-string plugins:install https://github.com/someuser/someplugin

  $ css-module-classname-to-string plugins:install someuser/someplugin
```

## `css-module-classname-to-string plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ css-module-classname-to-string plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ css-module-classname-to-string plugins:inspect myplugin
```

## `css-module-classname-to-string plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ css-module-classname-to-string plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ css-module-classname-to-string plugins add

EXAMPLES
  $ css-module-classname-to-string plugins:install myplugin 

  $ css-module-classname-to-string plugins:install https://github.com/someuser/someplugin

  $ css-module-classname-to-string plugins:install someuser/someplugin
```

## `css-module-classname-to-string plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ css-module-classname-to-string plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ css-module-classname-to-string plugins:link myplugin
```

## `css-module-classname-to-string plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ css-module-classname-to-string plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ css-module-classname-to-string plugins unlink
  $ css-module-classname-to-string plugins remove
```

## `css-module-classname-to-string plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ css-module-classname-to-string plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ css-module-classname-to-string plugins unlink
  $ css-module-classname-to-string plugins remove
```

## `css-module-classname-to-string plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ css-module-classname-to-string plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ css-module-classname-to-string plugins unlink
  $ css-module-classname-to-string plugins remove
```

## `css-module-classname-to-string plugins update`

Update installed plugins.

```
USAGE
  $ css-module-classname-to-string plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
