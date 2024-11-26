import React, { createContext, useState } from "react";

// Create the context
export const FavoritesContext = createContext({
  ids: [], // Array to store favorite item IDs
  addFavorite: (id) => {}, // Function to add an item to favorites
  removeFavorite: (id) => {}, // Function to remove an item from favorites
});

// Create the context provider component
const FavoritesContextProvider = ({ children }) => {
  // State to store the favorite item IDs
  const [favoriteIds, setFavoriteIds] = useState([]);

  // Function to add a favorite
  const addFavorite = (id) => {
    setFavoriteIds((currentIds) => [...currentIds, id]);
  };

  // Function to remove a favorite
  const removeFavorite = (id) => {
    setFavoriteIds((currentIds) => currentIds.filter((currentId) => currentId !== id));
  };

  // Context value to provide to the children
  const value = {
    ids: favoriteIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
