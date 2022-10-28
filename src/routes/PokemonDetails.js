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

      // if pokemon state is not(!) true (false aka still initial state of null (which is falsey)), then return "loading..." once api is fetched, this conditonal statement will be false and the other return below will render
    if (!pokemon) {
        return <h2 className="loading" >Loading...</h2>;
      }
      
    return (
        <div className='d-flex justify-content-evenly align-items-center mt-5 single-view'>
            <div>
              <img src={`${pokemon.sprites.front_default}`} height={'450'}/>
            </div>
            <div>
              <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
              <div id="description" className='d-flex mt-3'>
                <div className='me-3'>
                  <p><span className='fw-bold'>Height</span>: {pokemon.height}</p>
                  <p><span className='fw-bold'>Weight</span>: {pokemon.weight}</p>
                  <div><span className='fw-bold'>Abilities</span>:               
                      <ul>
                      {pokemon.abilities.map((pokemonAbility, idx) => (
                        <li key={idx}>{pokemonAbility.ability.name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <div><span className='fw-bold'>Types</span>:               
                      <ul>
                      {pokemon.types.map((pokemonType, idx) => (
                        <li key={idx}>{pokemonType.type.name}</li>
                      ))}
                    </ul>
                  </div>
                  <div><span className='fw-bold'>Stats</span>:               
                      <ul>
                      {pokemon.stats.map((pokemonStat, idx) => (
                        <li key={idx}>{pokemonStat.stat.name}: {pokemonStat.base_stat}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

        </div>
      )
}

export { PokemonDetails }