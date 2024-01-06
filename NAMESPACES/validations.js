"use strict";
var Validations;
(function (Validations) {
    Validations.checkText = (text) => text.length > 3;
    Validations.checkDate = (date) => !isNaN(date.valueOf());
})(Validations || (Validations = {}));
console.log(Validations.checkText("test"));
