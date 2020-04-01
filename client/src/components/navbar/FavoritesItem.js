import React, { useContext } from "react";
import { FavoritesContext } from "../../shared/context";

const FavoritesItem = props => {
  const { dispatchFavorites } = useContext(FavoritesContext);

  return (
    <tr>
      <td>{props.title}</td>
      <td className="uk-text-right">
        <button
          className="uk-button"
          type="button"
          uk-icon="icon: close;"
          onClick={event => {
            event.preventDefault();
            dispatchFavorites({ type: "removeFavorite", value: props.id });
          }}
        />
      </td>
    </tr>
  );
};

export default FavoritesItem;
