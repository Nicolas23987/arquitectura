
let allGames = [];

async function obtenerVideojuegos() {
    try {
        const response = await fetch('http://localhost:3000/api/videojuegos'); 
        allGames = await response.json(); 

        filtrarVideojuegos(); 
    } catch (error) {
        console.error('Error fetching games:', error);
        document.getElementById('error-message').classList.remove('hidden');
    }
}

window.onload = obtenerVideojuegos;


