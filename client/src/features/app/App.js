import React from "react"
import Layout from "../../components/Layout"
import Posts from "../posts/Posts"
// import Post from "../post/Post";

import FavoritesProvider from "../favorite/FavoritesProvider"

const App = () => {
  return (
    <FavoritesProvider>
      <Layout>
        <Posts />
      </Layout>
    </FavoritesProvider>
  )
}

export default App
