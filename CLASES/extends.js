"use strict";
(() => {
    class Avenger {
        constructor(name, realNane) {
            this.name = name;
            this.realNane = realNane;
            console.log("Constructor Avenger llamado!");
        }
        getFullName() {
            return `${this.name} ${this.realNane}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realNane, isMutant) {
            super(name, realNane);
            this.isMutant = isMutant;
            console.log("Constructor Xmen llamado!");
        }
        get fullname() {
            return `${this.name} - ${this.realNane}`;
        }
        set fullname(name) {
            if (name.length <= 3) {
                throw new Error("Name must be at least 3 characters!");
            }
            this.name = name;
        }
        getFullNameDesdeXmen() {
            return super.getFullName();
        }
    }
    const antman = new Xmen("Antman", "Antman Hero", true);
    //   antman.fullname = "Nik";
    //   console.log(antman.fullname);
})();
