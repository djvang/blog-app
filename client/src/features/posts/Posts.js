import React from "react"

import PostsGrid from "./PostsGrid"
import PostsList from "./PostsList"

import Pagination from "../../components/Pagination"
import LoadMore from "../../components/LoadMore"
import FilterBar from "../filter/FilterBar"
import usePosts from "./usePosts"
import Spinner from "../../components/Spinner"

const Posts = () => {
  const {
    data,
    loading,
    error,
    filters,
    setLimit,
    setOrder,
    setSearch,
  } = usePosts()

  if (error) {
    return (
      <div className="uk-alert-danger" data-uk-alert>
        <a className="uk-alert-close" data-uk-close></a>
        <p>{error.statusText}</p>
      </div>
    )
  }

  console.log(filters)

  return (
    <>
      <FilterBar
        data={filters}
        loading={loading}
        setLimit={setLimit}
        setSearch={setSearch}
        setOrder={setOrder}
      />
      <Spinner spinning={loading} />
      {data && <PostsGrid posts={data} />}
      {/* <LoadMore /> */}
      {/* <Pagination /> */}
    </>
  )
}

export default Posts
