import { API_BASE_URL, API_KEY } from './info.js';

const fetchMovies = async (topic) => {
    const url = `${API_BASE_URL}/${topic}?language=en-US&page=1&api_key=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const movieList = document.querySelector("#movie-list");
        movieList.innerHTML = ""; 

        data.results?.forEach(movie => {
            const card = document.querySelector("#movie-card").content.cloneNode(true);
            card.querySelector("h2").innerText = movie.original_title;
            card.querySelector("img").src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            card.querySelectorAll(".pill")[0].innerText = movie.overview;
            card.querySelectorAll(".pill")[1].innerText = `Coming: ${movie.release_date}`;
            movieList.appendChild(card);
        });

        document.querySelectorAll("nav button").forEach(button => {
            button.classList.toggle("active", button.dataset.topic === topic);
        });
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
};

// Handle button clicks
document.querySelectorAll("nav button").forEach(button => {
    button.addEventListener("click", () => {
        const topic = button.dataset.topic;
        history.pushState({}, "", `?topic=${topic}`);
        fetchMovies(topic);
    });
});

// Load initial movies
const initialTopic = new URLSearchParams(window.location.search).get("topic") || "now_playing";
fetchMovies(initialTopic);
