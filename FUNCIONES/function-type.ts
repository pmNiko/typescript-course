(() => {
  const addNumbers = (a: number, b: number) => a + b;

  const great = (name: string) => `Hola ${name}`;

  const saveTheWorld = () => `El mundo está salvado!`;

  let myFunction: Function;

  //? myFunction = 10;
  //? console.log(myFunction);

  myFunction = addNumbers;
  console.log(myFunction(3, 4));

  myFunction = great;
  console.log(myFunction("Nikolas"));

  myFunction = saveTheWorld;
  console.log(myFunction());
})();
