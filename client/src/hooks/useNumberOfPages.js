export const useNumberOfPages = (
  numberOfPosts,
  loadedMoreAmount,
  requestParams
) => {
  return (
    Math.ceil((numberOfPosts - loadedMoreAmount) / requestParams._limit) || 1
  );
};
