import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';


function PokemonDetails() {

    const [pokemon, setPokemon] = useState(null)

    const params = useParams();

    // add useEffect here ⬇️
    useEffect(() => {
    const fetchSinglePokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
    const data = await res.json();
    setPokemon(data);
    // console.log(pokemon);
    // console.log(typeof cards);
  }
    fetchSinglePokemon()
    //   .catch(console.error);
    }, []);

    if (!pokemon) {
        return <>loading...</>;
      }
      
    return (
        <div>
            <img src={`${pokemon.sprites.front_default}`} height={'350'}/>
            <p><span className='fw-bold'>height</span>: {pokemon.height}</p>
            <p><span className='fw-bold'>weight</span>: {pokemon.weight}</p>
            <div><span className='fw-bold'>abilities</span>:               
                <ul>
                {pokemon.abilities.map((pokemonAbility, idx) => (
                  <li key={idx}>{pokemonAbility.ability.name}</li>
                ))}
              </ul>
            </div>
            <div><span className='fw-bold'>types</span>:               
                <ul>
                {pokemon.types.map((pokemonType, idx) => (
                  <li key={idx}>{pokemonType.type.name}</li>
                ))}
              </ul>
            </div>
            <div><span className='fw-bold'>stats</span>:               
                <ul>
                {pokemon.stats.map((pokemonStat, idx) => (
                  <li key={idx}>{pokemonStat.stat.name}: {pokemonStat.base_stat}</li>
                ))}
              </ul>
            </div>
        </div>
      )
}

export { PokemonDetails }