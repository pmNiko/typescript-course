"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const great = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado!`;
    let myFunction;
    //? myFunction = 10;
    //? console.log(myFunction);
    myFunction = addNumbers;
    console.log(myFunction(3, 4));
    myFunction = great;
    console.log(myFunction("Nikolas"));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
