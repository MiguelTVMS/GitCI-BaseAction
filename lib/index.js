'use strict';
const util = require("util");
const debugLog = util.debuglog('gitci');
const eventEmitter = require('events').EventEmitter;

/**
 * This is the base action that should be implemented by all the actions.
 * @param  {Object} action The action that will be executed.
 */
var BaseAction = function (action) {
    eventEmitter.call(this);

    this.on('newListener', function (listener) {
        debugLog('Action event listener: %s', listener);
        if (this.availableListeners.indexOf(listener) < 0)
            throw new RangeError(util.format("There is no listener to the event \"%s\"", listener));
    });

    this.action = action;

    if (!this.validade())
        throw new Error(util.format("Invalid action passed: %s", JSON.stringify(action)));
}
util.inherits(BaseAction, eventEmitter);

/**
 * The action object that will be executed.
 */
BaseAction.prototype.action = null;

/**
 * The available event listeners for this action.
 */
BaseAction.prototype.availableListeners = ["actionError", "actionSuccess"];

/**
 * The prototype of the execute function.
 * This function must emit the "success" event when the execution succeded or "error" when a error ocurred.
 */
BaseAction.prototype.execute = function () {
    debugLog("Starting the execution @ \"BaseAction.prototype.execute\"");
    this.emit("actionSuccess");
};

/**
 * The prototype function to validade the function
 */
BaseAction.prototype.validade = function () {
    debugLog("Starting the validation @ \"BaseAction.prototype.execute\"");
    return (typeof BaseAction.action !== "undefided");
};

exports = module.exports = {
    BaseAction: BaseAction
}