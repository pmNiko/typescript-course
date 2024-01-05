(() => {
  /**
   * Principio Singleton
   */
  class Apocalipsis {
    static instance: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance)
        Apocalipsis.instance = new Apocalipsis("Soy el unico apocalipsis...");

      return Apocalipsis.instance;
    }

    changeName(name: string) {
      this.name = name;
    }
  }

  const apocalipsis = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();

  apocalipsis2.changeName("Soy distinto!");

  console.log(apocalipsis, apocalipsis2, apocalipsis3);
})();
