import { useFetch } from "./useFetch";
import { useTransformParams } from "./useTransformParams";

export const usePosts = (url, params) => {
  const transformedParams = useTransformParams(params);

  const { response, headers, error, loading } = useFetch(url, {
    requestParams: transformedParams
  });
  const posts = response || [];
  const numberOfPosts = headers ? headers.get("x-total-count") : 0;

  return { posts, numberOfPosts, error, loading };
};
