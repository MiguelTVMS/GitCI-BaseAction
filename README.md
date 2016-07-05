# GitCI-BaseAction
Base action the be used when creating you own action to GitCI

### Description
This base action should be used when creating a new Action for GitCI.

### Example
This is the example of the implementation of your own action.

```javascript
const util = require("util");
const baseAction = require("gitci-baseaction");

var MyCommand = function(action){

    // Add the events you want do allow the implementation to have.
    this.availableListeners.push("myEvent");

}
util.inherits(MyCommand, baseAction.BaseAction);

// Override this function with your execute.
MyCommand.prototype.execute = function () {
    ...
    MyCommand.on("success", Object);
};

// Override this function with your validation of the command.
// Must return a boolean indicating that its valid or not.
MyCommand.prototype.validade = function () {
    ...
};
```