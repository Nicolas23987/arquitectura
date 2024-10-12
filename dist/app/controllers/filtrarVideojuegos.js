function filtrarVideojuegos() {
  var searchInput = document.getElementById('search-input').value.toLowerCase();
  var selectedPlatform = document.getElementById('platform-filter').value;
  var selectedGenre = document.getElementById('genre-filter').value;
  var selectedPrice = document.getElementById('price-filter').value;
  var filteredGames = allGames.filter(function (game) {
    var matchesSearch = game.nombre.toLowerCase().includes(searchInput);
    var matchesPlatform = selectedPlatform ? game.plataformas.some(function (p) {
      return p.nombre === selectedPlatform;
    }) : true;
    var matchesGenre = selectedGenre ? game.generos.some(function (g) {
      return g.nombre === selectedGenre;
    }) : true;
    var matchesPrice = filterByPrice(game.precio, selectedPrice);
    return matchesSearch && matchesPlatform && matchesGenre && matchesPrice;
  });
  displayGames(filteredGames);
}
function filterByPrice(price, priceRange) {
  var priceNum = parseFloat(price);
  if (!priceRange) return true;
  if (priceRange === "0-20") return priceNum < 20;
  if (priceRange === "20-40") return priceNum >= 20 && priceNum < 40;
  if (priceRange === "40-60") return priceNum >= 40 && priceNum < 60;
  if (priceRange === "60-") return priceNum >= 60;
  return true;
}
document.getElementById('search-input').addEventListener('input', filterGames);
document.getElementById('platform-filter').addEventListener('change', filterGames);
document.getElementById('genre-filter').addEventListener('change', filterGames);
document.getElementById('price-filter').addEventListener('change', filterGames);