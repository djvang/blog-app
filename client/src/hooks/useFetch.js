import { useEffect, useReducer } from "react"

import queryString from "../utils/queryString"

const API_URL = "https://jsonplaceholder.typicode.com"

const initialState = {
  loading: false,
  data: null,
  error: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "REQUEST":
      return { data: null, error: null, loading: true }

    case "SUCCESS":
      return { loading: false, data: action.payload, error: null }

    case "ERROR":
      return { loading: false, error: action.payload, data: null }

    default:
      return state
  }
}

const useFetch = (pathname, options) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const params = queryString(options)

  useEffect(() => {
    dispatch({
      type: "REQUEST",
    })

    fetch(`${API_URL}${pathname}?${params}`)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json()
        }
        return Promise.reject(response)
      })
      .then((json) => {
        dispatch({
          type: "SUCCESS",
          payload: json,
        })
      })
      .catch((error) => {
        dispatch({
          type: "ERROR",
          payload: {
            url: error.url,
            status: error.status,
            statusText: error.statusText
              ? error.statusText
              : "Что-то пошло не так! :(",
          },
        })
      })
  }, [pathname, options])

  return { ...state }
}

export default useFetch
