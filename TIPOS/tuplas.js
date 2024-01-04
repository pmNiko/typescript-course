"use strict";
(() => {
    /**
     * Las tuplas nos proveen datos tipados posicionalmente
     */
    const hero = ["Dr Strang", 10, true];
    // hero[0] = 40
    // hero[1] = 'foo'
    console.log((hero[0] = "foo"));
    console.log(hero);
})();
