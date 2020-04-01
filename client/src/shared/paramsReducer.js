export const paramsReducer = (state, action) => {
  switch (action.type) {
    case "setPostsPerPage":
      return {
        ...state,
        _limit: action.value
      };
    case "setCurrentPageNumber":
      return {
        ...state,
        _page: action.value
      };
    case "setSortValue":
      return {
        ...state,
        _order: action.value
      };
    case "setSearchValue":
      return {
        ...state,
        q: action.value
      };
    case "setSliceRange":
      const [start, end] = action.value;
      return {
        ...state,
        _start: start,
        _end: end
      };
    default:
      return {
        ...state
      };
  }
};
