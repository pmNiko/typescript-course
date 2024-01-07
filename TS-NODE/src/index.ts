import { Pokemon } from "./decorators/pokemon";

const charmander = new Pokemon("Charmander");

// (Pokemon.prototype as any).fly = true;
// console.log(charmander);

charmander.savePokemon(801);
