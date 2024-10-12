function mostrarListaVideojuegos(games) {
    const gamesContainer = document.getElementById('games-container');
    gamesContainer.innerHTML = '';

    if (games.length === 0) {
        document.getElementById('no-results').classList.remove('hidden');
        return;
    }

    games.forEach(game => {
        const gameCard = `
            <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                <img src="${game.imagen}" alt="${game.nombre}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h2 class="text-xl font-semibold mb-2">${game.nombre}</h2>
                    <p class="text-gray-600 mb-2">Plataforma: ${game.plataformas.map(p => p.nombre).join(', ')}</p>
                    <p class="text-gray-600 mb-2">Género: ${game.generos.map(g => g.nombre).join(', ')}</p>
                    <p class="text-gray-600 mb-2">Precio: $${parseFloat(game.precio).toFixed(2)}</p>
                    <p class="text-gray-600 mb-2">Fecha de lanzamiento: ${new Date(game.fecha_lanzamiento).toLocaleDateString()}</p>
                    <p class="text-gray-700 mt-4">${game.sinopsis}</p>
                </div>
            </div>
        `;
        gamesContainer.innerHTML += gameCard;
    });

    document.getElementById('no-results').classList.add('hidden');
}
