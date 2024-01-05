(() => {
  class Avenger {
    constructor(protected name: string, public realNane: string) {
      console.log("Constructor Avenger llamado!");
    }

    protected getFullName(): string {
      return `${this.name} ${this.realNane}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realNane: string, public isMutant: boolean) {
      super(name, realNane);
      console.log("Constructor Xmen llamado!");
    }

    get fullname() {
      return `${this.name} - ${this.realNane}`;
    }

    set fullname(name: string) {
      if (name.length <= 3) {
        throw new Error("Name must be at least 3 characters!");
      }
      this.name = name;
    }

    public getFullNameDesdeXmen(): string {
      return super.getFullName();
    }
  }

  const antman = new Xmen("Antman", "Antman Hero", true);

  //   antman.fullname = "Nik";
  //   console.log(antman.fullname);
})();
