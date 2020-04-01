import React, { useContext } from "react";
import FavoritesList from "./FavoritesList";
import { FavoritesContext } from "../../shared/context";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="uk-navbar-item">
      <button
        className="uk-button"
        type="button"
        uk-icon="icon: heart; ratio: 2"
      />
      <div className="uk-width-large" uk-dropdown="mode: click">
        <div className="uk-dropdown-grid uk-child-width-1-1@m" data-uk-grid>
          <div>
            <table className="uk-table uk-table-divider uk-table-justify">
              <thead>
                <tr>
                  <th>Title</th>
                  <th className="uk-text-right">Delete</th>
                </tr>
              </thead>
              <FavoritesList favorites={favorites} />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
