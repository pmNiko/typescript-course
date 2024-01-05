(() => {
  let flash: {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: "Barry Allen",
    age: 24,
    powers: ["Suped speed", "travel in the future"],
  };

  flash = {
    ...flash,
    name: "Barry",
    getName() {
      return this.name;
    },
  };

  //   console.log(flash.getName ? flash.getName() : "");
  console.log(flash.getName?.());
})();
