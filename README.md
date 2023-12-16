# SCSS 7-1 Pattern Initializer

## Overview

The "SCSS 7-1 Pattern Initializer" extension for Visual Studio Code automates the creation of the directory structure for the popular SCSS 7-1 pattern. This pattern is widely used in front-end development for organizing SCSS files in a manageable and scalable way.

## Features

- **Folder Structure Creation**: Quickly create the standard 7-1 pattern folder structure within your project.
- **Customizable Folder Names**: Option to specify a custom name for the root folder of the pattern.
- **Initial File Setup**: Generates common SCSS files like `_base.scss` and `_typography.scss` with basic content to get you started.

## How to Use

1. **Install the Extension**: Search for "scss7-1" in the VS Code Extensions Marketplace and install it.
2. **Execute the Command**: Open the command palette (`Ctrl+Shift+P` on Windows/Linux, `Cmd+Shift+P` on macOS), then type "Create 7 - 1 pattern scss folders" and hit Enter.
3. **Specify Folder Name** (Optional): Enter a custom name for the root folder or leave blank to use the default "styles" folder.
4. **Folder Structure**: The extension will create the following folders (and some initial files) in your project:
    - `base`: Contains `_base.scss`, `_typography.scss`
    - `components`: Contains initial component files
    - `layout`: For layout-related styles
    - `pages`: Page-specific styles
    - `themes`: For theme-related styles
    - `abstracts`: Contains `_variables.scss`, `_mixins.scss`
    - `vendors`: For third-party styles

## Requirements

- Visual Studio Code version 1.85.0 or higher.

## Release Notes

### 0.0.1

Initial release of SCSS 7-1 Pattern Initializer.

## Contributing

Your contributions and suggestions are welcome. Please open an issue or submit a pull request for any enhancements.

## License

[MIT License](LICENSE)

---

This extension is not affiliated with the official SCSS language or its maintainers.
