import React from "react";
import FavoritesItem from "./FavoritesItem";

const FavoritesList = props => {
  const listItems = props.favorites.map(item => (
    <FavoritesItem key={item.id} title={item.title} id={item.id} />
  ));
  return <tbody>{listItems}</tbody>;
};

export default FavoritesList;
