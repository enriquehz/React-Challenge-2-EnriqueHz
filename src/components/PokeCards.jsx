import React from "react";
import PokeCard from "./PokeCard";
import { mockPokemonsData } from "../mock/pokeData";

let items = mockPokemonsData;
let pokeName = items[0].name;

console.log(items[0]);
console.log(pokeName);

//const listItems = items.map((item) => item);

let pokeCardsList = [];
items.forEach((item, index) => {
  pokeCardsList.push(
    <PokeCard
      pokemonName={item.name}
      spriteDefault={item.sprites.front_default || item.sprites.back_default}
      spriteShiny={item.sprites.front_shiny || item.sprites.back_shiny}
      pokemonVideo={item.videoLink}
    />
  );
});

console.log(pokeCardsList);
function PokeCards() {
  return <div>{pokeCardsList}</div>;
}

export default PokeCards;

/*
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
*/
