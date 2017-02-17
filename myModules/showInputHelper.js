exports.showInputHelper = {
    __okButton :"Ok",
    __changeButton : "Change",
    __vsCode : require('vscode'),
    __prompt : undefined,
    __defaultValue : undefined,

    createNetSuitePrompt : function (prompt, value, configuration, configurationName) {
        this.__prompt = prompt;
        this.__defaultValue = value;

        if (configuration.get(configurationName) != undefined) {
            return this.__vsCode.window.showWarningMessage(prompt + ' is already defined. If you want to update it, please do so manually in your settings. Press OK to continue or Cancel to cancel whole Initialization.', this.__okButton);
        }

        return this.__vsCode.window.showInputBox({
            ignoreFocusOut: true,
            prompt: prompt,
            validateInput: (value) => {
                if (value == null || value == '') {
                    return 'Value cannot be empty';
                };

                return null;
            },
            value: value
        });
    },
    resolveNetSuitePrompt : function (response, configuration, configurationName) {
        if (response == undefined) {
            this.__vsCode.window.showErrorMessage('Initialization cancelled.');
            configuration.update(configurationName, undefined, true);

            this.__prompt = undefined;
            this.__defaultValue = undefined;

            return false;
        };

        if (response == this.__okButton) {
            this.__prompt = undefined;
            this.__defaultValue = undefined;

            configuration.update(configurationName, response, true);
            return true;
        };
        
        return false;
    }
};