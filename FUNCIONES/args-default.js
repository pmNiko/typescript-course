"use strict";
(() => {
    const fullName = (firsName, lastName, upper = false) => {
        // return `${firsName} ${lastName || "no lastname"}`;
        return upper
            ? `${firsName} ${lastName}`.toUpperCase()
            : `${lastName || "-----"}`;
    };
    const name = fullName("Tony", "", true);
    console.log({ name });
})();
