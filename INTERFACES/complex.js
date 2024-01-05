"use strict";
(() => {
    const client = {
        name: "Nikolas",
        age: 34,
        address: {
            id: 125,
            zip: "KGB 569",
            city: "Ottawa",
        },
        getFullAddress() {
            var _a;
            return (_a = this.address) === null || _a === void 0 ? void 0 : _a.city;
        },
    };
    const client2 = {
        name: "Melissa",
        age: 30,
        getFullAddress() {
            var _a;
            return ((_a = this.address) === null || _a === void 0 ? void 0 : _a.city) || "No address available";
        },
    };
    console.log(client2.getFullAddress("125"));
})();
