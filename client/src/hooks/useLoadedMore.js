export const useLoadedMore = requestParams => {
  return requestParams["_end"] !== requestParams["_start"]
    ? requestParams["_end"] - requestParams["_start"] - requestParams._limit
    : 0;
};
