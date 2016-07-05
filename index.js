'use strict';
const util = require("util");
const debugLog = util.debuglog('gitci');
const eventEmitter = require('events').EventEmitter;

/**
 * This is the base action that should be implemented by all the actions.
 * @param  {Array} action 
 */
var BaseAction = function (action) {
    eventEmitter.call(this);

    this.on('newListener', function (listener) {
        debuglog('Action event listener: %s', listener);
        if (this.availableListeners.indexOf(listener) < 0)
            throw new RangeError(util.format("There is no listener to the event \"%s\"", listener));
    });

    this.action = action;

    this.validade();
}
util.inherits(BaseAction, eventEmitter);

/**
 * The action object that will be executed.
 */
BaseAction.prototype.action = null;

/**
 * The available event listeners for this action.
 */
BaseAction.prototype.availableListeners = ["error"];

/**
 * The prototype of the execute function
 */
BaseAction.prototype.execute = function () {
    return false;
};

/**
 * The prototype function to validade the function
 */
BaseAction.prototype.validade = function () {
    return false;
};

exports = module.exports = {
    BaseAction: BaseAction
}