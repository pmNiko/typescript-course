import axios from "axios";
import { Pokemon } from "../interfaces";

export const getPokemon = async (id: number): Promise<Pokemon> => {
  const resp = await axios<Pokemon>(`http://pokeapi.co/api/v2/pokemon/${id}`);

  return resp.data;
};
