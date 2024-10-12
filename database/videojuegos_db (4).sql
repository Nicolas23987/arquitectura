-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-10-2024 a las 05:33:13
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `videojuegos_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genero`
--

CREATE TABLE `genero` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `genero`
--

INSERT INTO `genero` (`id`, `nombre`) VALUES
(1, 'Acción'),
(2, 'Aventura'),
(3, 'RPG'),
(4, 'Shooter'),
(5, 'Plataformas'),
(6, 'Deportes'),
(7, 'Estrategia'),
(8, 'Simulación');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plataforma`
--

CREATE TABLE `plataforma` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `plataforma`
--

INSERT INTO `plataforma` (`id`, `nombre`) VALUES
(1, 'PC'),
(2, 'PlayStation 5'),
(3, 'Xbox Series X'),
(4, 'Nintendo Switch'),
(5, 'PlayStation 4'),
(6, 'Xbox One');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reseña`
--

CREATE TABLE `reseña` (
  `id` int(11) NOT NULL,
  `calificación` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `videojuegoId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reseña`
--

INSERT INTO `reseña` (`id`, `calificación`, `fecha`, `videojuegoId`) VALUES
(1, 5, '2024-10-12 01:52:51', 1),
(2, 4, '2024-10-12 01:52:51', 2),
(3, 3, '2024-10-12 01:52:51', 3),
(4, 5, '2024-10-12 01:52:51', 4),
(5, 5, '2024-10-12 01:52:51', 5),
(6, 4, '2024-10-12 01:52:51', 6),
(7, 5, '2024-10-12 01:52:51', 7),
(8, 4, '2024-10-12 01:52:51', 8),
(9, 5, '2024-10-12 01:52:51', 9),
(10, 4, '2024-10-12 01:52:51', 10),
(11, 5, '2024-10-12 01:52:51', 11),
(12, 5, '2024-10-12 01:52:51', 12),
(13, 4, '2024-10-12 01:52:51', 13),
(14, 5, '2024-10-12 01:52:51', 14),
(15, 3, '2024-10-12 01:52:51', 15),
(16, 5, '2024-10-12 01:52:51', 16),
(17, 4, '2024-10-12 01:52:51', 17),
(18, 4, '2024-10-12 01:52:51', 18),
(19, 5, '2024-10-12 01:52:51', 19),
(20, 5, '2024-10-12 01:52:51', 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `videojuego`
--

CREATE TABLE `videojuego` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `imagen` varchar(250) NOT NULL,
  `genero` varchar(50) DEFAULT NULL,
  `fecha_lanzamiento` date DEFAULT NULL,
  `sinopsis` text DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `videojuego`
--

INSERT INTO `videojuego` (`id`, `nombre`, `imagen`, `genero`, `fecha_lanzamiento`, `sinopsis`, `precio`) VALUES
(1, 'The Legend of Zelda: Breath of the Wild', 'https://th.bing.com/th/id/OIP.y6g8vlIvCS_AtXvnIk2-EQHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7', 'Aventura', '2017-03-03', 'Un juego de mundo abierto con exploración libre y mecánicas de aventura y acción.', 59.99),
(2, 'Cyberpunk 2077', 'https://www.cyberpunk.net/build/images/social-thumbnail-en-ddcf4d23.jpg', 'RPG', '2020-12-10', 'Un RPG de mundo abierto en un futuro distópico.', 49.99),
(3, 'Call of Duty: Modern Warfare II', 'https://th.bing.com/th/id/OIP.GT9MDHwx5UesrcoqhVBCBQHaEN?rs=1&pid=ImgDetMain', 'Shooter', '2022-10-28', 'Un shooter en primera persona con campañas tácticas.', 69.99),
(4, 'FIFA 23', 'https://gamehunt.co/wp-content/uploads/2022/11/FIFA-23-scaled.jpg', 'Deportes', '2022-09-30', 'El juego de fútbol más popular con jugadores de todo el mundo.', 59.99),
(5, 'Super Mario Odyssey', 'https://th.bing.com/th/id/R.898f1223c35699754c9b96ea43c0021e?rik=yxWU8PTADy1ZHg&pid=ImgRaw&r=0', 'Plataformas', '2017-10-27', 'Mario explora nuevos mundos en este juego de plataformas en 3D.', 49.99),
(6, 'Minecraft', 'https://www.global-esports.news/wp-content/uploads/2022/10/Minecraft-1.20-1.jpg', 'Simulación', '2011-11-18', 'Un juego de simulación y construcción de mundo abierto.', 26.95),
(7, 'Red Dead Redemption 2', 'https://th.bing.com/th/id/R.f1f2496bcd5721b924caf06b8e486afb?rik=mfRn4Y8WJRRKwg&pid=ImgRaw&r=0', 'Acción', '2018-10-26', 'Una épica aventura de vaqueros en el Viejo Oeste.', 59.99),
(8, 'Fortnite', 'https://th.bing.com/th/id/OIP.2DmEjIk2G54N9m3RZNi9ZgHaEK?rs=1&pid=ImgDetMain', 'Shooter', '2017-07-21', 'Un juego de disparos y supervivencia en modo battle royale.', 0.00),
(9, 'Assassin\'s Creed Valhalla', 'https://th.bing.com/th/id/R.e3959c90d136cded1ef5d316efeca509?rik=4iIO08pwQ7Wcag&pid=ImgRaw&r=0', 'Aventura', '2020-11-10', 'Una aventura épica en la era de los vikingos.', 59.99),
(10, 'The Sims 4', 'https://image.api.playstation.com/vulcan/img/rnd/202111/3019/oXPtJkwSeNlYon2MqTX9K4sQ.png', 'Simulación', '2014-09-02', 'Un simulador de vida donde puedes crear y controlar personas.', 39.99),
(11, 'Grand Theft Auto V', 'https://th.bing.com/th/id/OIP.zHcfWEm0hgLujGebse2QsAHaD3?rs=1&pid=ImgDetMain', 'Acción', '2013-09-17', 'Un mundo abierto lleno de crimen y aventura.', 29.99),
(12, 'Horizon Forbidden West', 'https://cdn.wccftech.com/wp-content/uploads/2022/01/horizon-forbidden-west.jpg', 'Aventura', '2022-02-18', 'Una secuela épica de exploración y combate en un mundo post-apocalíptico.', 69.99),
(13, 'Valorant', 'https://th.bing.com/th/id/OIP.VXrl_2umySa2rvg6N66McAHaEK?rs=1&pid=ImgDetMain', 'Shooter', '2020-06-02', 'Un juego de disparos táctico basado en equipos.', 0.00),
(14, 'Animal Crossing: New Horizons', 'https://www.ordinaryreviews.com/wp-content/uploads/2020/03/animal-crossing-new-horizons-launches.jpg', 'Simulación', '2020-03-20', 'Un simulador de vida en una isla paradisíaca.', 59.99),
(15, 'Among Us', 'https://th.bing.com/th/id/R.3fac17e8bb45d81ec9b2c24655758075?rik=oVqnWYa2j4vGLQ&pid=ImgRaw&r=0', 'Acción', '2018-11-16', 'Un juego multijugador de deducción social y sabotaje.', 4.99),
(16, 'Elden Ring', 'https://assets-prd.ignimgs.com/2021/06/12/elden-ring-button-03-1623460560664.jpg', 'RPG', '2022-02-25', 'Un RPG de acción en un mundo de fantasía.', 59.99),
(17, 'Resident Evil Village', 'https://cdn.wccftech.com/wp-content/uploads/2020/06/Resident-Evil-Village-Chris-Keyart.jpg', 'Aventura', '2021-05-07', 'Un survival horror con misterios y terror en un pueblo olvidado.', 59.99),
(18, 'Far Cry 6', 'https://cdn.akamai.steamstatic.com/steam/apps/2369390/capsule_616x353.jpg?t=1690498134', 'Acción', '2021-10-07', 'Un juego de acción en mundo abierto con combate en una isla caribeña.', 59.99),
(19, 'Spider-Man: Miles Morales', 'https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png', 'Acción', '2020-11-12', 'Una emocionante aventura con el superhéroe arácnido.', 49.99),
(20, 'The Witcher 3: Wild Hunt', 'https://th.bing.com/th/id/R.ef088bdab155160154141fa3898892af?rik=fFj3Q34goxm7Jg&pid=ImgRaw&r=0', 'RPG', '2015-05-19', 'Una épica aventura RPG en un mundo de fantasía oscura.', 39.99);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `videojuegos_generos`
--

CREATE TABLE `videojuegos_generos` (
  `videojuegoId` int(11) NOT NULL,
  `generoId` int(11) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `videojuegos_generos`
--

INSERT INTO `videojuegos_generos` (`videojuegoId`, `generoId`, `id`) VALUES
(1, 2, 1),
(2, 3, 2),
(3, 4, 3),
(4, 6, 4),
(5, 5, 5),
(6, 8, 6),
(7, 1, 7),
(8, 4, 8),
(9, 2, 9),
(10, 8, 10),
(11, 1, 11),
(12, 2, 12),
(13, 4, 13),
(14, 8, 14),
(15, 1, 15),
(16, 3, 16),
(17, 2, 17),
(18, 1, 18),
(19, 1, 19),
(20, 3, 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `videojuegos_plataformas`
--

CREATE TABLE `videojuegos_plataformas` (
  `videojuegoId` int(11) NOT NULL,
  `plataformaId` int(11) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `videojuegos_plataformas`
--

INSERT INTO `videojuegos_plataformas` (`videojuegoId`, `plataformaId`, `id`) VALUES
(1, 4, 1),
(2, 1, 2),
(3, 2, 3),
(4, 1, 4),
(5, 4, 5),
(6, 1, 6),
(7, 2, 7),
(8, 1, 8),
(9, 2, 9),
(10, 1, 10),
(11, 1, 11),
(12, 2, 12),
(13, 1, 13),
(14, 4, 14),
(15, 1, 15),
(16, 2, 16),
(17, 2, 17),
(18, 2, 18),
(19, 2, 19),
(20, 1, 20);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `genero`
--
ALTER TABLE `genero`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `plataforma`
--
ALTER TABLE `plataforma`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `reseña`
--
ALTER TABLE `reseña`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_d2505873ad14cdb9cd59f9af0b0` (`videojuegoId`);

--
-- Indices de la tabla `videojuego`
--
ALTER TABLE `videojuego`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `videojuegos_generos`
--
ALTER TABLE `videojuegos_generos`
  ADD PRIMARY KEY (`videojuegoId`,`id`,`generoId`),
  ADD KEY `IDX_1f2f0514c7193ece604fc18203` (`generoId`);

--
-- Indices de la tabla `videojuegos_plataformas`
--
ALTER TABLE `videojuegos_plataformas`
  ADD PRIMARY KEY (`videojuegoId`,`id`,`plataformaId`),
  ADD KEY `IDX_3200a75df53848713f013893fb` (`videojuegoId`),
  ADD KEY `IDX_9dfe7ba2417892827931cb437c` (`plataformaId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `genero`
--
ALTER TABLE `genero`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `plataforma`
--
ALTER TABLE `plataforma`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `reseña`
--
ALTER TABLE `reseña`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `videojuego`
--
ALTER TABLE `videojuego`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `reseña`
--
ALTER TABLE `reseña`
  ADD CONSTRAINT `FK_d2505873ad14cdb9cd59f9af0b0` FOREIGN KEY (`videojuegoId`) REFERENCES `videojuego` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `videojuegos_generos`
--
ALTER TABLE `videojuegos_generos`
  ADD CONSTRAINT `FK_1f2f0514c7193ece604fc18203f` FOREIGN KEY (`generoId`) REFERENCES `genero` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `videojuegos_plataformas`
--
ALTER TABLE `videojuegos_plataformas`
  ADD CONSTRAINT `FK_9dfe7ba2417892827931cb437cb` FOREIGN KEY (`plataformaId`) REFERENCES `plataforma` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
