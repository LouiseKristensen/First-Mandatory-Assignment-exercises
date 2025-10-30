import { fetchMovies } from "./script.js";

document.querySelectorAll("nav button").forEach((menuOption) => {
menuOption.addEventListener("click", (e) => {
    const categoryId = e.target.id; 
    fetchMovies(categoryId);

    document.querySelector("nav button.active")?.classList.remove("active");
    e.target.classList.add("active");
});
});
