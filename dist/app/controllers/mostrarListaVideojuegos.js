function mostrarListaVideojuegos(games) {
  var gamesContainer = document.getElementById('games-container');
  gamesContainer.innerHTML = '';
  if (games.length === 0) {
    document.getElementById('no-results').classList.remove('hidden');
    return;
  }
  games.forEach(function (game) {
    var gameCard = "\n            <div class=\"bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105\">\n                <img src=\"".concat(game.imagen, "\" alt=\"").concat(game.nombre, "\" class=\"w-full h-48 object-cover\">\n                <div class=\"p-6\">\n                    <h2 class=\"text-xl font-semibold mb-2\">").concat(game.nombre, "</h2>\n                    <p class=\"text-gray-600 mb-2\">Plataforma: ").concat(game.plataformas.map(function (p) {
      return p.nombre;
    }).join(', '), "</p>\n                    <p class=\"text-gray-600 mb-2\">G\xE9nero: ").concat(game.generos.map(function (g) {
      return g.nombre;
    }).join(', '), "</p>\n                    <p class=\"text-gray-600 mb-2\">Precio: $").concat(parseFloat(game.precio).toFixed(2), "</p>\n                    <p class=\"text-gray-600 mb-2\">Fecha de lanzamiento: ").concat(new Date(game.fecha_lanzamiento).toLocaleDateString(), "</p>\n                    <p class=\"text-gray-700 mt-4\">").concat(game.sinopsis, "</p>\n                </div>\n            </div>\n        ");
    gamesContainer.innerHTML += gameCard;
  });
  document.getElementById('no-results').classList.add('hidden');
}