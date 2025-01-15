const API_KEY = "ba22f4a61530ad9b9b92d5ba79caa66f";
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR&page=1`;
fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Erreur lors de la requête.");
        }
        return response.json();
    })
    .then((data) => {
        console.log("Films populaires :", data.results);
        data.results.forEach((movie) => {
            console.log(movie.title);
        });
    })
    .catch((error) => {
        console.error("Erreur :", error);
    });