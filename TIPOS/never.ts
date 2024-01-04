(() => {
  /**
   * Representa un tipo de dato no alcanzado
   * por lo tanto al llamar la fn el código tendra un error.
   */
  const abc = (message: string): never => {
    throw new Error(message);
  };

  abc("This is a error message");
})();
