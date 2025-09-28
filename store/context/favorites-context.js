import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavorite = (id) => setFavoriteMealIds((prev) => [...prev, id]);
  const removeFavorite = (id) =>
    setFavoriteMealIds((prev) => prev.filter((m) => m.id !== id));

  const ctx = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={ctx}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
