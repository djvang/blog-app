import { useReducer, useContext } from "react"
import FavoritesContext from "./FavoritesContext"

let id = 0
const initialState = []

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, { id: id++, ...action.payload }]

    case "REMOVE_FAVORITE":
      return state.filter((favorite) => favorite.id !== action.payload)

    default:
      return state
  }
}

export const useFavoritesProvider = () => {
  const [favorites, dispatch] = useReducer(reducer, initialState)

  const addFavorite = (data) => {
    dispatch({
      type: "ADD_FAVORITE",
      payload: data,
    })
  }

  const removeFavorite = (id) => {
    dispatch({
      type: "REMOVE_FAVORITE",
      payload: id,
    })
  }

  return { favorites, addFavorite, removeFavorite }
}

const useFavorites = () => {
  return useContext(FavoritesContext)
}

export default useFavorites
