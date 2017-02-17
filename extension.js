// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');
var showInputHelper = require('./myModules/showInputHelper').showInputHelper;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "netsuite-script-uploader" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode.commands.registerCommand('netsuite.initialize', function () {
        var netsuiteConfiguration = vscode.workspace.getConfiguration('netsuite');

        showInputHelper.createNetSuitePrompt('SandBox URL', 'http://system.sandbox.netsuite.com', netsuiteConfiguration, 'sandboxUrl')
            .then((value) => {
                if (showInputHelper.resolveNetSuitePrompt(value, netsuiteConfiguration, 'sandboxUrl'))
                {
                    showInputHelper.createNetSuitePrompt('Production URL', 'http://system.netsuite.com', netsuiteConfiguration, 'productionUrl')
                        .then((value) => {
                            if (showInputHelper.resolveNetSuitePrompt(value, netsuiteConfiguration, 'productionUrl'))
                            {
                                showInputHelper.createNetSuitePrompt('NetSuite User Name', 'you@yourdomain.super', netsuiteConfiguration, 'userName')
                                    .then((value) => {
                                        if (showInputHelper.resolveNetSuitePrompt(value, netsuiteConfiguration, 'userName'))
                                        {
                                            showInputHelper.createNetSuitePrompt('NetSuite User Role', 3, netsuiteConfiguration, 'userRole')
                                                .then((value) => {
                                                    if (showInputHelper.resolveNetSuitePrompt(value, netsuiteConfiguration, 'userRole'))
                                                    {

                                                    }
                                                });
                                        }
                                    });
                            }
                        });
                }
            });
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate; 