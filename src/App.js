import React, { useEffect, useState} from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  // initialize state
  const [pokemonList, setpokemonList] = useState([]);

  // add useEffect here ⬇️
  useEffect(() => {
  // declare the async data fetching function
  const fetchData = async () => {
  // get the data from the api
  const res = await fetch(pokeApi);
  // convert the data to json
  const data = await res.json();

  // set state with the result
  setpokemonList(data.results);
  console.log(pokemonList)
  // console.log(typeof cards);
}

  // call the function
  fetchData()
    // make sure to catch any error
    .catch(console.error);;
  }, []);

  return (
    <div data-testid="app">
      <Navigation />

      <h1>Pokemon should appear here</h1>
      <PokemonCard />
    </div>
  );
}

export { App };
