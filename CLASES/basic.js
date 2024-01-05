"use strict";
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        // constructor(name: string, team: string, realName?: string) {
        //   this.name = name;
        //   this.team = team;
        //   this.realName = realName;
        // }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team}) ${this.realName}`;
        }
    }
    // private name: string;
    // public team: string;
    // public realName?: string;
    Avenger.avgAge = 35;
    const antman = new Avenger("Antman", "Capitan");
    console.log(antman.bio());
    console.log(Avenger.getAvgAge());
})();
