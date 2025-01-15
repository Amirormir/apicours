const url = 'https://pokeapi.co/api/v2/pokemon/charizard'
 
fetch(url)
    .then(reponse => reponse.json())
    .then(data => {
        console.log("Détails : ");
        console.log("Les pokemons :", data.name);
        console.log("Id :", data.id);
        console.log("Types", data.types.map((type) => type.type.name).join(", "));
    })
    .catch(error => console.error("Erreur :", error));

