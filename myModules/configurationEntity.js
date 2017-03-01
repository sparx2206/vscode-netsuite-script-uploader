var ConfigurationEntity = function(name, label, defaultValue, configuration){
    var self = this;
    self.name = name;
    self.label = label;
    self.defaultValue = defaultValue;
    self.__emptyValues = [undefined,null, 0];

    self.update = function(value){
        if (!isNaN(value)){
            value = parseInt(value);
        }
        configuration.update(self.name, value, true);      
    };

    self.isEmpty = function(){
        return self.__emptyValues.indexOf(configuration.get(self.name)) != -1;
    };

    self.erase = function(){
        configuration.update(self.name, undefined, true); 
    }
}

module.exports = ConfigurationEntity;