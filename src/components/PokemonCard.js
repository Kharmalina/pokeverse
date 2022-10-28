import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function PokemonCard({ url, name, pokemonFilteredList }) {


  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setPokemon(data);
    console.log(pokemon)
  };

  useEffect(() => {
    fetchPokemon();
  }, [pokemonFilteredList]);

  return (
    <>
      {pokemon ? (
        <Card className="w-100 h-100 indiv-card"  >
          <Card.Img src={`${pokemon.sprites.front_default}`}></Card.Img>
          <Card.Body>
            <Card.Title >      
              <Link to={`/${name}`} style={{color: "black"}}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Link>
              {/* {pokemon.name} */}
            </Card.Title>
            <Card.Text as={"div"}>
              <ul>
                {pokemon.abilities.map((pokemonAbility, idx) => (
                  <li key={idx}>{pokemonAbility.ability.name}</li>
                ))}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        ""
      )}
    </>
  );
}

export { PokemonCard };
