import React, { useState, createContext } from 'react';
import { Favorites } from '../routes/Favorites';

export const FavoritesContext = createContext();

function FavoritesProvider({children}) {

    const [favorites, setFavorites] = useState([])

    function addFavorite(pokemon) {
        setFavorites([...favorites, pokemon])
    }

    function removeFavorite() {
        setFavorites(favorites.filter(pokemon => {
            return pokemon.name !== pokemon.name
        }))
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }} >
            {children}
        </FavoritesContext.Provider>
    )
}

export { FavoritesProvider }