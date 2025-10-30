import { apiKey } from "./env.js";

export const API_CONFIG = {
    baseUrl: "https://api.themoviedb.org/3",
    apiKey: apiKey,
    posterBase: "https://image.tmdb.org/t/p/w154", 
    endpoints: {
        nowPlaying: "/movie/now_playing?language=en-US&page=1",
        popular: "/movie/popular?language=en-US&page=1",
        topRated: "/movie/top_rated?language=en-US&page=1",
        upcoming: "/movie/upcoming?language=en-US&page=1",
    }
}
