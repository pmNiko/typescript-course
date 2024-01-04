"use strict";
(() => {
    const fullName = (firsName, lastName) => {
        // return `${firsName} ${lastName || "no lastname"}`;
        return `${firsName} ${lastName}`;
    };
    const name = fullName("Tony");
    console.log({ name });
})();
