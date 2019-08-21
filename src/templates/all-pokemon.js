import React from "react"

export default ({ pageContext: { allPokemon } }) => (
  <div>
    <h1>Behold, the Pokémon!</h1>
    <ul>
      {allPokemon.map(allPokemon => (
        <li key={allPokemon.pokemon.id}>
          <img
            src={allPokemon.pokemon.sprites.front_default}
            alt={allPokemon.pokemon.name}
          />
          <p>{allPokemon.pokemon.name}</p>
        </li>
      ))}
    </ul>
  </div>
)