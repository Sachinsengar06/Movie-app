export interface MovieItem {
  id: number;
  poster_path: string | null;
  title?: string;
  overview?: string;
  release_date?: string;
  backdrop_path?:string;
}

export interface MovieApiResponse {
  page: number;
  results: MovieItem[];
  total_pages: number;
  total_results: number;
 
}
export interface MovieDetailApiResponse {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: null | object; // You can create a more specific type if needed
    budget: number;
    director:string;
    genres: Genre[];
    homepage: string | null;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  
  interface Genre {
    id: number;
    name: string;
  }
  
  interface ProductionCompany {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }
  
  interface ProductionCountry {
    iso_3166_1: string;
    name: string;
  }
  
  interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
  }

export interface VideoResponseAPI {
  id:number;
  results:videoItem[]
}
interface videoItem {
  key:string;
  type:string;
}