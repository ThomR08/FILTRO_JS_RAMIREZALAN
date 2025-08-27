import * as modules from './modules.js'

document.addEventListener('DOMContentLoaded', async () => { // Esperar a que el DOM se cargue

    document.querySelector('#formMovies').addEventListener('submit', async e =>{ // Añadir un evento para submit del formulario
        e.preventDefault();
        const movieDiccionary = Object.fromEntries(new FormData(e.target));  // Guardar la data del formulario en un JSON
        console.log(movieDiccionary.movieName) // Obtener nombre de la pelicula
        await modules.searchMovie(movieDiccionary)
    });
});