"use strict";
(() => {
    // Tipos
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    // Arreglos
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    //Enumeraciones
    let PowerHero;
    (function (PowerHero) {
        PowerHero[PowerHero["aquaman"] = 0] = "aquaman";
        PowerHero[PowerHero["batman"] = 1] = "batman";
        PowerHero[PowerHero["flash"] = 5] = "flash";
        PowerHero[PowerHero["superman"] = 100] = "superman";
    })(PowerHero || (PowerHero = {}));
    const fuerzaFlash = PowerHero.flash;
    const fuerzaSuperman = PowerHero.superman;
    const fuerzaBatman = PowerHero.batman;
    const fuerzaAcuaman = PowerHero.aquaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    // Aserciones de Tipo
    const poder = "100";
    const largoDelPoder = Array(parseFloat(poder)).length;
    console.log(largoDelPoder);
})();
