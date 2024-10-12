// models/Reseña.js
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Videojuego from "./Videojuego.js";

@Entity()
class Reseña {
  @PrimaryGeneratedColumn()
  id;

  @ManyToOne(() => Videojuego, (videojuego) => videojuego.reseñas)
  videojuego;

  @Column({ type: "int", nullable: false })
  calificación;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  fecha;
}

export default Reseña;
