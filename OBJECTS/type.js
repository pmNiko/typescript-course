"use strict";
(() => {
    var _a, _b;
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: [1, 4],
    };
    flash = Object.assign(Object.assign({}, flash), { name: "Barry", getName() {
            return this.name;
        } });
    let superman = {
        name: "Superman",
        age: 30,
        powers: [3],
        getName() {
            return this.name;
        },
    };
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
    console.log((_b = superman.getName) === null || _b === void 0 ? void 0 : _b.call(superman));
})();
