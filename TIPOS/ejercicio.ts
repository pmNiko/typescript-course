(() => {
  // Tipos
  const batman: string = "Bruce";
  const superman: string = "Clark";

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ["Lex Lutor", 5, true];

  // Arreglos
  const aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

  //Enumeraciones
  enum PowerHero {
    aquaman,
    batman,
    flash = 5,
    superman = 100,
  }
  const fuerzaFlash: PowerHero = PowerHero.flash;
  const fuerzaSuperman: PowerHero = PowerHero.superman;
  const fuerzaBatman: PowerHero = PowerHero.batman;
  const fuerzaAcuaman: PowerHero = PowerHero.aquaman;

  // Retorno de funciones
  function activar_batiseñal(): string {
    return "activada";
  }

  function pedir_ayuda(): void {
    console.log("Auxilio!!!");
  }

  // Aserciones de Tipo
  const poder: any = "100";
  const largoDelPoder: number = Array(parseFloat(poder as string)).length;
  console.log(largoDelPoder);
})();
