import { API_BASE_URL, API_KEY } from './info.js'

// Get the movies from the URL 
const getMoviesFromURL = () => {
    // Reads the query parameters from the browser’s URL that is also in the index.html a link
    const params = new URLSearchParams(window.location.search);

    // the index.html a link structur
    return params.get("topic");
};

// Change backgroundcolor for topics
const changeMovieLink = () => {

    // get topic from url
    const topic = getMoviesFromURL();

    // select all links from index.html
    const links = document.querySelectorAll('nav a');

    // looping through each nav link
    links.forEach(link => {
        // Extracting the Topic from Each Link
        const urlParams = new URLSearchParams(link.search);
        const linkTopic = urlParams.get("topic");

        // Adding or Removing the "active" Class
        if (linkTopic === topic) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
};

const fetchMovies = async () => {
    // Get the topic dynamically / building the API URL
    const topic = getMoviesFromURL(); 

    // Browser URL / index.html-a-link / ? = starts the query string / language=en-US = Requests data in English (US) / & = Separates multiple parameters / page=1 = Requests the first page of results / api_key=${API_KEY} = Uses your API key to authenticate the request
    const url = `${API_BASE_URL}/${topic}?language=en-US&page=1&api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data)
    
    // Handle emty data
    // Checks if data.results exists and contains movies
    if (!data.results || data.results.length === 0) return;

    // Select the Movie List Container
    const movieList = document.querySelector("#movie-list");

    // Clear previous content
    movieList.innerHTML = ""; 

    // Loop Through Movies & Create Cards
    data.results.forEach(movie => {
        const card = document.querySelector("#movie-card").content.cloneNode(true);
        card.querySelector("h2").innerText = movie.original_title;
        card.querySelector("img").src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        card.querySelectorAll(".pill")[0].innerText = `${movie.overview}`;
        card.querySelectorAll(".pill")[1].innerText = `Coming: ${movie.release_date}`;
        movieList.appendChild(card);
    });

    // Call after fetching movies to update the active state
    changeMovieLink();
};

fetchMovies();
changeMovieLink();











