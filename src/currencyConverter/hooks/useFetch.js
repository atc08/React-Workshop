import React, {useEffect, useState} from 'react';

const useFetch = (url, query) => {
const [fetchData, setFetchData] = useState(null);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            if (url) {
                const searchString = query ? new URLSearchParams(query) : '';
                try {
                  setLoading(true)
                  const response = await fetch.js(`${url}?${searchString}`);
                  const data = await response.json();
                  data && setFetchData(data);
                } catch (err) {
                    setError(err);
                } finally {
                  setLoading(false);
                }
            }
        })()
    }, [url, query]);


    return [fetchData || error, loading];
}

export default useFetch;
