import React, { useEffect, useState} from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './routes/Home';
import { PokemonDetails } from './routes/PokemonDetails';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { FavoritesProvider } from './components/FavoritesProvider';

import { Favorites } from './routes/Favorites';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  // initialize state
  const [pokemonList, setpokemonList] = useState([]);
  const [pokemonFilteredList, setPokemonFilteredList] = useState([]);

  // add useEffect here ⬇️
  useEffect(() => {
  const fetchData = async () => {
  const res = await fetch(pokeApi);
  const data = await res.json();
  setpokemonList(data.results);
  setPokemonFilteredList(data.results);
  // console.log(pokemonList)
  // console.log(typeof cards);
}
  fetchData()
    .catch(console.error);
  }, []);

  return (
    <FavoritesProvider>
        <BrowserRouter>
          <div data-testid="app">
            <Navigation />
            <Routes>
              <Route path="/" element={<Home pokemonList={pokemonList} pokemonFilteredList={pokemonFilteredList} setPokemonFilteredList={setPokemonFilteredList}/>} />
              <Route path="/:name" element={<PokemonDetails />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </div>
        </BrowserRouter>
    </FavoritesProvider>

  );
}

export { App };







// import React, { useEffect, useState} from 'react';
// import { Navigation } from './components/Navigation';
// import { PokemonCard } from './components/PokemonCard';

// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// const LIMIT = 150;
// const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

// function App() {
//   // initialize state
//   const [pokemonList, setpokemonList] = useState([]);
//   const [pokemonFilteredList, setPokemonFilteredList] = useState([]);

//   // add useEffect here ⬇️
//   useEffect(() => {
//   const fetchData = async () => {
//   const res = await fetch(pokeApi);
//   const data = await res.json();
//   setpokemonList(data.results);
//   setPokemonFilteredList(data.results);
//   // console.log(pokemonList)
//   // console.log(typeof cards);
// }
//   fetchData()
//     .catch(console.error);
//   }, []);

//   function handleChange(e) {
//     const value = e.target.value;
//     const regex = new RegExp(value, 'gi');
//     const filtered = pokemonList.filter((pokemon) => {
//       return pokemon.name.match(regex);
//     });
//     setPokemonFilteredList(filtered);
//   }

//   return (
//     <div data-testid="app">
//       <Navigation />
//       <InputGroup onChange={handleChange} className="mb-3 w-50 mx-auto">
//       <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
//         <Form.Control
//           placeholder="Search"
//           aria-label="search"
//           aria-describedby="basic-addon1"
//         />
//       </InputGroup>
//       {/* <h1>Pokemon</h1> */}
//       <Container>
//         <Row md={4}>
//           {pokemonFilteredList.map((pokemon, idx) => (
//             <Col className="mt-4" md="3">
//               <PokemonCard
//                 pokemonFilteredList={pokemonFilteredList}
//                 key={idx}
//                 name={pokemon.name}
//                 url={pokemon.url}
//               />
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export { App };