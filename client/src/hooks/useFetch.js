import { useState, useEffect } from "react";

export const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [headers, setHeaders] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let modifiedURL = new URL(url);
  for (let key in options.requestParams) {
    modifiedURL.searchParams.set(key, options.requestParams[key]);
  }

  useEffect(() => {
    setLoading(true);

    let fetchPromise = fetch(modifiedURL.href, options);
    fetchPromise
      .then(res => {
        setHeaders(res.headers);
        return res.json();
      })
      .then(json => {
        setResponse(json);
        setLoading(false);
      })
      .catch(e => {
        setError(error);
        setLoading(false);
      });
  }, [url, modifiedURL.href]);

  return { response, headers, error, loading };
};
