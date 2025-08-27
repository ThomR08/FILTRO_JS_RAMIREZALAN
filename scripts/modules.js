export async function searchMovie(movieDiccionary) {
    const apiResponse = await fetchMovies(movieDiccionary.movieName); // Buscar las peliculas
    const moviesContain = document.querySelector('#movies'); // Inyectar al documento
    moviesContain.innerHTML = "";
    apiResponse.description.forEach(element => {
        moviesContain.innerHTML+= `
        <div class="card">
            <img src="${element["#IMG_POSTER"]}" alt="">
            <h2>${element["#TITLE"]}</h2>
            <p>Year: ${element["#YEAR"]}</p>
            <p>Rank: ${element["#RANK"]}</p>
            <p>Actors: ${element["#ACTORS"]}</p>
            <a href="${element["#IMDB_URL"]}"><h3>IMDB</h3></a>
        </div>`
    });
}

export async function fetchMovies(movieName) {
    const response = await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${movieName}`, {
        method: 'GET',
        headers: {
            'Accept': '*/*'
        }
    });
    const data = await response.json();
    return data;
};