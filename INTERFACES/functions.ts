(() => {
  interface AddTwoNumbers {
    (a: number, b: number): number;
  }

  let addNumberFunction: AddTwoNumbers;

  addNumberFunction = (a: number, b: number) => {
    return a + b;
  };

  console.log(addNumberFunction(1, 2));
})();
