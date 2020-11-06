import React from "react";
import PokeCard from "./PokeCard";
import { mockPokemonsData } from "../mock/pokeData";

let items = mockPokemonsData;
let pokeName = items[0].name;

console.log(items[0]);
console.log(pokeName);

function PokeCards() {
  return (
    <div>
      <PokeCard
        pokemonName={pokeName}
        spriteDefault="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
        spriteShiny="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png"
        pokemonVideo="https://www.youtube.com/watch?v=evvO5Gcl-mo"
      />
    </div>
  );
}

export default PokeCards;
