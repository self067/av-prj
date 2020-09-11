import { useEffect, useState } from 'react';

const useFetch = url => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async() => {

      try {
        const json = await fetch('db.json');
        const res = await json.json();
        setResponse(res);
      } catch(err) {
        setError(err);
      }
    };
    fetchData();
  }, []);

  return { response, error };
}

export default useFetch;
