(() => {
  (() => {
    interface Hero {
      name: string;
      age: number;
      powers: number[];
      getName?: () => string;
    }

    let flash: Hero = {
      name: "Barry Allen",
      age: 24,
      powers: [1, 4],
    };

    flash = {
      ...flash,
      name: "Barry",
      getName() {
        return this.name;
      },
    };

    let superman: Hero = {
      name: "Superman",
      age: 30,
      powers: [3],
      getName() {
        return this.name;
      },
    };

    console.log(flash.getName?.());
    console.log(superman.getName?.());
  })();
})();
