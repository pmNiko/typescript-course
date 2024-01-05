(() => {
  type Hero = {
    name: string;
    age: number;
    powers: number[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Hero = "Nikolas";

  console.log(typeof myCustomVariable);

  myCustomVariable = 20;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: "Batman",
    age: 20,
    powers: [5],
  };
  console.log(typeof myCustomVariable);
})();
