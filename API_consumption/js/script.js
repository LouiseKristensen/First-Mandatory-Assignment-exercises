import { API_CONFIG } from "./api_config.js"; 

export async function fetchMovies(id){

  const url = `${API_CONFIG.baseUrl}${API_CONFIG.endpoints[id]}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_CONFIG.apiKey}`
    }
  };

  try{
    document.querySelector("#wait").classList.remove("hidden");
    document.querySelector("#movieList").innerHTML = "";

    const response = await fetch(url, options);
    const data = await response.json();
    const results = data.results;

    const movieList = document.createDocumentFragment();
    results.forEach(movie => {

      const moviecard = document.querySelector("#movieCards").content.cloneNode(true);

        moviecard.querySelector("h2").textContent = movie.title 

        const poster = moviecard.querySelector("img");
        poster.setAttribute("src", `${API_CONFIG.posterBase}${movie.poster_path}`);
        poster.setAttribute("alt", movie.title);
      
        moviecard.querySelector(".description").textContent = movie.overview;
        moviecard.querySelector(".orgtitle").textContent = movie.original_title;
        moviecard.querySelector(".releasedate").textContent = movie.release_date;

      movieList.append(moviecard);
    }); 

    document.querySelector("#wait").classList.add("hidden");
    document.querySelector("#movieList").append(movieList);

  } catch (error) {
      console.error("Error fetching movies:", error);
    }
}; 

fetchMovies("nowPlaying"); 