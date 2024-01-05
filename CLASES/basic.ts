(() => {
  class Avenger {
    // private name: string;
    // public team: string;
    // public realName?: string;
    static avgAge: number = 35;
    static getAvgAge() {
      return this.name;
    }

    // constructor(name: string, team: string, realName?: string) {
    //   this.name = name;
    //   this.team = team;
    //   this.realName = realName;
    // }

    constructor(
      private name: string,
      public team: string,
      public realName?: string
    ) {}

    bio() {
      return `${this.name} (${this.team}) ${this.realName}`;
    }
  }

  const antman: Avenger = new Avenger("Antman", "Capitan");
  console.log(antman.bio());
  console.log(Avenger.getAvgAge());
})();
