import React from "react";

function PokeCard(props) {
  return (
    <div>
      <h1> {props.pokemonName} </h1>
      <p>
        <img
          src={props.spriteDefault}
          onMouseOver={(e) => (e.currentTarget.src = props.spriteShiny)}
          onMouseOut={(e) => (e.currentTarget.src = props.spriteDefault)}
          onClick={() => window.open(props.pokemonVideo, "_blank")}
          alt="Default"
        />
      </p>
    </div>
  );
}

export default PokeCard;
