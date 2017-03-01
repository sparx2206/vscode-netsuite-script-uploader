var NetsuiteConfiguration = function(){
    var self = this;
    self.ConfigurationEntity = require('./configurationEntity');
    self.configuration = require('vscode').workspace.getConfiguration('netsuite');
    self.sandboxUrl = new self.ConfigurationEntity('sandboxUrl', 'SandBox URL','http://system.sandbox.netsuite.com', self.configuration);
    self.productionUrl = new self.ConfigurationEntity('productionUrl', 'ProductionURL','http://system.netsuite.com', self.configuration);
    self.userName = new self.ConfigurationEntity('userName', 'User name','you@yourdomain.super', self.configuration);
    self.userRole = new self.ConfigurationEntity('userRole', 'User role','3', self.configuration);
}

module.exports = NetsuiteConfiguration

