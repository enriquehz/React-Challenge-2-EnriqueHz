import React from "react";
//import { mockPokemonsData } from "../mock/pokeData";

//console.log(mockPokemonsData);
let PokemonData = {
  name: "charizard",
  sprites: Object,
  videoLink: "https://www.youtube.com/watch?v=evvO5Gcl-mo"
};

function PokeCard(PokemonData) {
  let pokemonName = PokemonData.name;
  let spriteDefault = PokemonData.sprites.front_default;
  let spriteShiny = PokemonData.sprites.front_shiny;
  let pokemonVideo = PokemonData.video;

  /*
  let pokemonName = mockPokemonsData[0].name;
  let spriteDefault = mockPokemonsData[0].sprites.front_default;
  let spriteShiny = mockPokemonsData[0].sprites.front_shiny;
  let pokemonVideo = mockPokemonsData[0].videoLink;
  */

  return (
    <div>
      <h1> {pokemonName} </h1>
      <p>
        <img src={spriteDefault} alt="Default" />
      </p>
      <p>
        <img src={spriteShiny} alt="Shiny" />
      </p>
      <a href={pokemonVideo}>{pokemonName} video</a>
    </div>
  );
}

export default PokeCard;
