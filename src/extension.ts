import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

const scssStructure = {
    'base': {
		'_animations.scss': '// Animations',
        '_base.scss': `
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@200;300;400;500&family=Manrope:wght@800&family=Montserrat:ital,wght@0,200;1,100&family=Mulish:wght@200;300;400;500;600;700;800;900;1000&family=Noto+Sans:ital,wght@0,400;0,500;0,600;0,700;1,500;1,600&family=Open+Sans:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Pacifico&family=Permanent+Marker&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,500;1,600;1,700;1,800&family=Raleway:wght@600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,400&family=Ubuntu:wght@700&display=swap');\n
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  font-family: 'Inter', sans-serif;
}
`,
'_typography.scss': '// Typography styles',
'_utilities.scss': '// Utilities',
        // Add more files as needed
    },
    'components': {
        '_buttons.scss': '// Buttons styles\n',
        // More component files...
    },
    'layout': {
        '_header.scss': '// Header styles\n',
        '_footer.scss': '// Footer styles\n',
		'_grid.scss': '// Grid styles\n',
        // More layout files...
    },
    'pages': {
        // Page-specific styles...
    },
    'themes': {
        // Theme styles...
    },
    'abstracts': {
        '_variables.scss': '// SCSS Variables\n',
        '_mixins.scss': '// SCSS Mixins\n',
        // More abstracts...
    },
    'vendors': {
        // Vendor-specific styles...
    }
};

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('scss7v1.createStylesFolder', async () => {
		const rootPath = vscode.workspace.rootPath;

		if (!rootPath) {
			vscode.window.showWarningMessage('No project open');
			return;
		}

		let folderName = await vscode.window.showInputBox({ prompt: 'Enter folder name' });

		if (!folderName) {
			folderName = 'styles'
		}

		const folderPath = path.join(rootPath, folderName);
		create7_1PatternFolders(folderPath)
		vscode.window.showInformationMessage(`7-1 SCSS pattern structure created in folder '${folderName}'`);

	});

	context.subscriptions.push(disposable);
}

/**
 * Create 7-1 pattern folders for arranging scss
 * @param basePath 
 */
function create7_1PatternFolders(basePath: string) {
    Object.entries(scssStructure).forEach(([folder, files]) => {
        const folderPath = path.join(basePath, folder);
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }

        Object.entries(files).forEach(([fileName, fileContent]) => {
            const filePath = path.join(folderPath, fileName);
            if (!fs.existsSync(filePath)) {
                fs.writeFileSync(filePath, fileContent);
            }
        });
    });

    const mainFilePath = path.join(basePath, 'main.scss');
    if (!fs.existsSync(mainFilePath)) {
        let importStatements = Object.keys(scssStructure)
            .map(folder => `@import '${folder}/*';`)
            .join('\n');
        fs.writeFileSync(mainFilePath, importStatements);
    }
}

// This method is called when your extension is deactivated
export function deactivate() {}
