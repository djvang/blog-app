import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { useFavorites } from "./hooks/useFavorites";

import Posts from "./components/posts/Posts";
import Albums from "./components/Albums";
import Navbar from "./components/navbar/Navbar";
import PostPage from "./components/postPage/PostPage";

import { FavoritesContext } from "./shared/context";

const App = () => {
  const { favorites, dispatchFavorites, isActiveFavorite } = useFavorites();

  return (
    <Router>
      <FavoritesContext.Provider
        value={{
          favorites,
          dispatchFavorites,
          isActiveFavorite
        }}
      >
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/posts" />
          </Route>
          <Route exact path="/posts">
            <Posts />
          </Route>
          <Route path="/albums">
            <Albums />
          </Route>
          <Route path="/posts/:id">
            <PostPage />
          </Route>
        </Switch>
      </FavoritesContext.Provider>
    </Router>
  );
};

export default App;
