function filtrarVideojuegos() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const selectedPlatform = document.getElementById('platform-filter').value;
    const selectedGenre = document.getElementById('genre-filter').value;
    const selectedPrice = document.getElementById('price-filter').value;

    const filteredGames = allGames.filter(game => {
        const matchesSearch = game.nombre.toLowerCase().includes(searchInput);
        const matchesPlatform = selectedPlatform ? game.plataformas.some(p => p.nombre === selectedPlatform) : true;
        const matchesGenre = selectedGenre ? game.generos.some(g => g.nombre === selectedGenre) : true;
        const matchesPrice = filterByPrice(game.precio, selectedPrice);

        return matchesSearch && matchesPlatform && matchesGenre && matchesPrice;
    });

    mostrarListaVideojuegos(filteredGames);
}

function filterByPrice(price, priceRange) {
    const priceNum = parseFloat(price);

    if (!priceRange) return true; 
    if (priceRange === "0-20") return priceNum < 20;
    if (priceRange === "20-40") return priceNum >= 20 && priceNum < 40;
    if (priceRange === "40-60") return priceNum >= 40 && priceNum < 60;
    if (priceRange === "60-") return priceNum >= 60;

    return true;
}

document.getElementById('search-input').addEventListener('input', filtrarVideojuegos);
document.getElementById('platform-filter').addEventListener('change', filtrarVideojuegos);
document.getElementById('genre-filter').addEventListener('change', filtrarVideojuegos);
document.getElementById('price-filter').addEventListener('change', filtrarVideojuegos);
