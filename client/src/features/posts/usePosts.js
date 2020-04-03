import useFetch from "../../hooks/useFetch"

import useFilter from "../filter/useFilter"

const usePosts = () => {
  const { data: filters, setLimit, setOrder, setSearch } = useFilter()
  const { data, error, loading } = useFetch("/posts", filters)

  return {
    data,
    error,
    loading,
    filters,
    setLimit,
    setOrder,
    setSearch,
  }
}

export default usePosts
