(() => {
  const a = 10;

  let b = 34;

  /** activamos "noImplicitAny: true"
   * Con la inferencia de tipos el interprete de TS nos provee todos los
   * métodos acorde al tipo de dato.
   */
  function sayHello(msg: string) {
    console.log(`Hello ${msg}!`);
  }

  sayHello("Nikolas");
})();
