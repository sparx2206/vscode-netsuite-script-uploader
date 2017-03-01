var ShowInputHelper = function (){
    var self = this;
    self.__okButton = "Ok";
    self.__vsCode = require('vscode');

    self.createNetSuitePrompt = function (configurationEntity) {
        if (!configurationEntity.isEmpty()) {
            return this.__vsCode.window.showWarningMessage(configurationEntity.label + 
                    ' is already defined. If you want to update it, please do so manually in your settings. Press OK to continue or Close to cancel whole Initialization.',
                    this.__okButton);
        }

        return this.__vsCode.window.showInputBox({
            ignoreFocusOut: true,
            prompt: configurationEntity.label,
            validateInput: (value) => {
                if (value === null || value === '') {
                    return 'Value cannot be empty';
                };

                return null;
            },
            value: configurationEntity.defaultValue
        });
    };
    self.resolveNetSuitePrompt = function (response, configurationEntity) {
        if (response === undefined) {
            configurationEntity.erase();

            return false;
        }
        
        if (response != this.__okButton) {
            configurationEntity.update(response)
        }

        return true;
    }
};

module.exports = ShowInputHelper;