"use strict";
(() => {
    /**
     * Principio Singleton
     */
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance)
                Apocalipsis.instance = new Apocalipsis("Soy el unico apocalipsis...");
            return Apocalipsis.instance;
        }
        changeName(name) {
            this.name = name;
        }
    }
    const apocalipsis = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis2.changeName("Soy distinto!");
    console.log(apocalipsis, apocalipsis2, apocalipsis3);
})();
