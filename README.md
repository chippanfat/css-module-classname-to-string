css-module-classname-to-string
=================


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

This isn't meant to be the best code or most preformat. This is a tool that saves me some time by running in a github action
when a certain condition is met in @deliowales repositories.

### What is this for?
This automates the task of removing any `style.less` files from component directories and adding the content to a global
`app.less` in addition to moving the style sheet content, it will also search through the files for the `className`
prop and change the JSX component prop from `className={styles.menuButton}` to `styles="menuButton"`

Because style sheet modules are used throughout the day-to-day work it's difficult to keep on top of them and merge them
into the prototype branch. So I've created this tool to run via a github action and produce a PR that will allow me to
automatically find and process the style modules and convert them.

@chippanfat
