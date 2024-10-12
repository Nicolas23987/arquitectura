// models/VideojuegosGeneros.js
import { Entity, PrimaryColumn, ManyToOne } from "typeorm";
import Videojuego from "./Videojuego.js";
import Genero from "./Genero.js";

@Entity("videojuegos_generos") // Especifica el nombre de la tabla
class VideojuegosGeneros {
  @PrimaryColumn({ type: "int" }) // Define el tipo de columna
  id;

  @ManyToOne(() => Videojuego, (videojuego) => videojuego.generos)
  videojuego;

  @ManyToOne(() => Genero, (genero) => genero.videojuegos)
  genero;
}

export default VideojuegosGeneros;
