import { useReducer } from "react";
import { favoritesReducer } from "../shared/favoritesReducer";

export const useFavorites = () => {
  const [favorites, dispatchFavorites] = useReducer(favoritesReducer, []);

  const isActiveFavorite = id => {
    return favorites.find(favPost => favPost.id === id);
  };

  return {
    favorites,
    dispatchFavorites,
    isActiveFavorite
  };
};
