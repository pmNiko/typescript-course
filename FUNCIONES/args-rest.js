"use strict";
(() => {
    const fullName = (firstName, ...rest) => {
        return `${firstName} ${rest.join(" ")}}`;
    };
    const superman = fullName("Clark", "Super", "Kent", "Joseph");
    console.log({ superman });
})();
