import React from "react"

import Icon from "../../components/Icon"
import Button from "../../components/Button"

import useFavorites from "./useFavorites"

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites()

  return (
    <>
      <Button className="uk-icon">
        <Icon icon="heart" ratio={2} />
      </Button>
      <div className="uk-width-large" data-uk-dropdown="mode: click">
        <div className="uk-dropdown-grid uk-child-width-1-1@m" data-uk-grid>
          <div>
            {!!favorites.length ? (
              <table className="uk-table uk-table-divider uk-table-justify">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th className="uk-text-right">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {favorites.map((favorite) => (
                    <tr key={favorite.id}>
                      <td>{favorite.title}</td>
                      <td className="uk-text-right">
                        <Button onClick={() => removeFavorite(favorite.id)}>
                          <Icon icon="close" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div>нету избранных</div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Favorites
