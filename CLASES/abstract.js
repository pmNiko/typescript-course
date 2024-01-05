"use strict";
(() => {
    class Mutant {
        constructor(name, realname) {
            this.name = name;
            this.realname = realname;
        }
    }
    class Xmen extends Mutant {
        action() {
            throw new Error("Method not implemented.");
        }
        salvarMundo() {
            return "Mundo a salvo!";
        }
    }
    class Villian extends Mutant {
        action() {
            throw new Error("Method not implemented.");
        }
        conquistarMundo() {
            return "Mundo conquistado!";
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan");
    const magneto = new Villian("Magneto", "Magnus");
    //   console.log(wolverine.salvarMundo());
    //   console.log(magneto.conquistarMundo());
    const printName = (character) => {
        console.log(character.realname);
    };
    //   printName(magneto);
})();
