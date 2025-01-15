const API_KEY = "ba22f4a61530ad9b9b92d5ba79caa66f"; 
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR&page=1`;
 

fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Erreur lors de la requête pour les films populaires.");
        }
        return response.json();
    })
    .then((data) => {
        const firstMovie = data.results[0];
        console.log(`Titre : ${firstMovie.title}`);
        console.log(`Date de sortie : ${firstMovie.release_date}`);
 
       
        const movieId = firstMovie.id; 
        const urlCredits = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=fr-FR`;

        return fetch(urlCredits);
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Erreur lors de la requête pour les acteurs.");
        }
        return response.json(); 
    })
    .then((data) => {
        console.log("Acteurs principaux :");
        data.cast.slice(0, 5).forEach((actor) => {
            console.log(`${actor.name} joue le rôle de ${actor.character}`);
        });
    })
    .catch((error) => {
        console.error("Erreur :", error);
    });
 