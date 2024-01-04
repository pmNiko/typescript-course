"use strict";
(() => {
    const fullName = (firsName, lastName) => {
        return `${firsName} ${lastName}`;
    };
    const name = fullName("Tony", "Stark");
    console.log({ name });
})();
