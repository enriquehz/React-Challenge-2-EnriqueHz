import React from "react";
import PokeCard from "./PokeCard";
import { mockPokemonsData } from "../mock/pokeData";

let items = mockPokemonsData;

console.log(items[0]);

function PokeCards() {
  return <PokeCard />;
}

export default PokeCards;
