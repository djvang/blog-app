import React from "react"
import { useFavoritesProvider } from "../favorite/useFavorites"

import FavoritesContext from "./FavoritesContext"

const FavoritesProvider = ({ children }) => {
  const favorites = useFavoritesProvider()
  return (
    <FavoritesContext.Provider value={favorites}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesProvider
