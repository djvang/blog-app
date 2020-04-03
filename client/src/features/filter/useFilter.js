import { useReducer } from "react"

const initialState = {
  _sort: "id",
  _order: "asc",
  _page: 1,
  _limit: 6,
  q: "",
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ORDER":
      return { ...state, _order: action.payload }
    case "SET_LIMIT":
      return { ...state, _limit: +action.payload }
    case "SET_SEARCH":
      return { ...state, q: action.payload }

    default:
      return state
  }
}

const useFilter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setOrder = (value) => {
    dispatch({
      type: "SET_ORDER",
      payload: value,
    })
  }

  const setSearch = (value) => {
    dispatch({
      type: "SET_SEARCH",
      payload: value,
    })
  }

  const setLimit = (value) => {
    dispatch({
      type: "SET_LIMIT",
      payload: value,
    })
  }

  return { data: state, setOrder, setSearch, setLimit }
}

export default useFilter
