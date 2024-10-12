import { Entity, PrimaryColumn, ManyToOne } from "typeorm";
import Videojuego from "./Videojuego.js";
import Plataforma from "./Plataforma.js";

@Entity("videojuegos_plataformas") // Opcional: especifica el nombre de la tabla
class VideojuegosPlataformas {
  @PrimaryColumn({ type: "int" }) // Define el tipo de columna
  id;

  @ManyToOne(() => Videojuego, (videojuego) => videojuego.plataformas)
  videojuego;

  @ManyToOne(() => Plataforma, (plataforma) => plataforma.videojuegos)
  plataforma;
}

export default VideojuegosPlataformas; // Asegúrate de exportar la clase correctamente
