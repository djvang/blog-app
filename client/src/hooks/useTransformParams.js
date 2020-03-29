export const useTransformParams = params => {
  const transformedParams = { ...params };
  if (transformedParams["_end"] !== transformedParams["_start"]) {
    delete transformedParams._limit;
    delete transformedParams._page;
  }
  return transformedParams;
};
