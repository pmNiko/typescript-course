(() => {
  abstract class Mutant {
    constructor(public name: string, public realname: string) {}

    /**
     * name
     */
    abstract action(): number;
  }

  class Xmen extends Mutant {
    action(): number {
      throw new Error("Method not implemented.");
    }
    salvarMundo() {
      return "Mundo a salvo!";
    }
  }

  class Villian extends Mutant {
    action(): number {
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

  const printName = (character: Mutant) => {
    console.log(character.realname);
  };

  //   printName(magneto);
})();
