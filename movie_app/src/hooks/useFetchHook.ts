import { useEffect, useState } from "react";
interface item {
    adult: boolean;
    backdrop_path: string;
    genre_ids: [];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
  }
interface Data {
    page:number;
    results:item[];
    total_pages:number;
    total_results:number;
}
const initialData:Data = {
    page:0,
    results:[],
    total_pages:0,
    total_results:0
}
export const useFetchUrl = () => {
    const baseUrl = 'https://api.themoviedb.org/3'
    const API_KEY = '55718d90ee8b12327d5fd483d51da682';
    const [data, setData] = useState(initialData);
    useEffect(()=>{
        const  fetchMovies = async() => {
            try{
                const response = await fetch(`${baseUrl}/discover/movie?api_key={${API_KEY}}&with_genres=27&language=en-US&page=1`,{
                    method: 'GET',
                    headers: {
                        'accept': 'application/json',
                        'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTcxOGQ5MGVlOGIxMjMyN2Q1ZmQ0ODNkNTFkYTY4MiIsIm5iZiI6MTcyNTg3NTk1Ni4yNDk4NzMsInN1YiI6IjY2ZGU4NzFjZTA1MDA5NTQ5MWMyNjA4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Sz-TF7UfN_JU2J2Cesh1LQbSVJyAaL_XXWwKi6ozaw`
                    }
                })
                 const jsonData = await response.json();
                setData(jsonData);
            }
            catch(error){
                console.log(error)
            }
        }
        fetchMovies();
    },[])
    return{
        data
    }
}