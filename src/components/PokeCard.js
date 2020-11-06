import React from "react";
//import { mockPokemonsData } from "../mock/pokeData";

//console.log(mockPokemonsData);

function PokeCard(props) {
  //let pokemonName = props.name;
  //let spriteDefault = props.sprites.front_default;
  //let spriteShiny = props.sprites.front_shiny;
  //let pokemonVideo = props.video;

  /*
  let pokemonName = mockPokemonsData[0].name;
  let spriteDefault = mockPokemonsData[0].sprites.front_default;
  let spriteShiny = mockPokemonsData[0].sprites.front_shiny;
  let pokemonVideo = mockPokemonsData[0].videoLink;
  */

  return (
    <div>
      <h1> {props.pokemonName} </h1>
      <p>
        <img src={props.spriteDefault} alt="Default" />
      </p>
      <p>
        <img src={props.spriteShiny} alt="Shiny" />
      </p>
      <a href={props.pokemonVideo}>{props.pokemonName} video</a>
    </div>
  );
}

export default PokeCard;
