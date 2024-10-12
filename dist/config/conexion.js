import { DataSource } from "typeorm";
import Genero from "../app/models/Genero.js";
import Plataforma from "../app/models/Plataforma.js";
import Reseña from "../app/models/Reseña.js";
import Videojuego from "../app/models/Videojuego.js";
import VideojuegosGeneros from "../app/models/VideojuegosGeneros.js";
import VideojuegosPlataformas from "../app/models/VideojuegosPlataformas.js";
var AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "videojuegos_db",
  synchronize: false,
  logging: false,
  entities: [Genero, Plataforma, Reseña, Videojuego, VideojuegosGeneros, VideojuegosPlataformas]
});
export default AppDataSource;