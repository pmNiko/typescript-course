"use strict";
(() => {
    var _a;
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Suped speed", "travel in the future"],
    };
    flash = Object.assign(Object.assign({}, flash), { name: "Barry", getName() {
            return this.name;
        } });
    //   console.log(flash.getName ? flash.getName() : "");
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
})();
