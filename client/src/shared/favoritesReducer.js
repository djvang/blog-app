export const favoritesReducer = (favorites, action) => {
  switch (action.type) {
    case "removeFavorite":
      return [...favorites.filter(favPost => favPost.id !== action.value)];
    case "addFavorite":
      favorites.push(action.value);
      return [...favorites];
    default:
      return [...favorites];
  }
};
