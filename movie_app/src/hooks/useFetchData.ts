import { useEffect, useState } from "react";
import { MovieApiResponse, MovieDetailApiResponse } from "../types/tbdmApi";

const useFetchData = (API: string) => {
  const [data, setData] = useState<MovieApiResponse|MovieDetailApiResponse|null>(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const getData = async () => {
      setLoading(true); // Set loading to true when starting the fetch
      try {
        const response = await fetch(API, {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTcxOGQ5MGVlOGIxMjMyN2Q1ZmQ0ODNkNTFkYTY4MiIsIm5iZiI6MTcyNTg3NTk1Ni4yNDk4NzMsInN1YiI6IjY2ZGU4NzFjZTA1MDA5NTQ5MWMyNjA4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Sz-TF7UfN_JU2J2Cesh1LQbSVJyAaL_XXWwKi6ozaw`
          }
        });
        const result = await response.json();
        setData(result); // Set the fetched data
      } catch (error) {
        console.log('An error occurred while fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false after the fetch is complete
      }
    };
    
    getData();
  }, [API]);

  return { data, loading };
};

export default useFetchData;
