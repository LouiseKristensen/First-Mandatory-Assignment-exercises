import { API_CONFIG } from "./api_config.js"; 

const target = document.body.dataset.target;

async function fetchMovies(target){
  // console.log("Type modtaget i fetchMovies:", type);
  // console.log("Endpoints:", API_CONFIG.endpoints);
  

  const url = `${API_CONFIG.baseUrl}${API_CONFIG.endpoints[target]}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_CONFIG.apiKey}`
    }
  };

  try{
    const response = await fetch(url, options);
    // console.log(response)
    const data = await response.json();
    const results = data.results;

    const movieList = document.createDocumentFragment();
    results.forEach(movie => {

      const moviecard = document.querySelector("#movieCards").content.cloneNode(true);

        moviecard.querySelector("h2").textContent = movie.title 

        const poster = moviecard.querySelector('img');
          const posterBase = "https://image.tmdb.org/t/p/w154";
          poster.setAttribute("src", posterBase + movie.poster_path);
          poster.setAttribute("alt", movie.title);

      
        moviecard.querySelector(".description").textContent = movie.overview;

        const orgtitle = moviecard.querySelector(".orgtitle"); 
          orgtitle.textContent = movie.original_title
          orgtitle.textContent = "Original title: " + movie.original_title
          orgtitle.classList.add("font")

        const releasedate  = moviecard.querySelector(".releasedate"); 
          releasedate.textContent = movie.release_date
          releasedate.textContent = "Release date: " + movie.release_date
          releasedate.classList.add("font")

      movieList.append(moviecard);
    })

    document.querySelector("#wait").classList.add("hidden");
    document.querySelector("#movieList").append(movieList);

  } catch (error) {
      console.error("Error fetching movies:", error);
    }
}

fetchMovies(target);


// const firstLink = document.querySelector("nav a");
// const initialTarget = firstLink.dataset.target;
// fetchMovies(initialTarget);

// document.querySelectorAll("nav a").forEach(link => {
//   link.addEventListener("click", e => {
//     e.preventDefault();           // forhindrer reload / navigation
//     const target = link.dataset.target;
//     document.body.dataset.target = target;
//     fetchMovies(target);
//   });
// });



