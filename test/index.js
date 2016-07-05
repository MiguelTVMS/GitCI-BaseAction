'use strict';
const baseActionModule = require("../lib/index.js");

var testAction = { "nothing": "nothing" };

console.log("Starting action testing.");
try {
    var action = new baseActionModule.BaseAction(testAction);

    action.on("success", function () {
        console.assert(true, "Action tested successfuly");
    });

    action.execute();
} catch (error) {
    console.assert(false, "Erro testing action: %s", error);
}