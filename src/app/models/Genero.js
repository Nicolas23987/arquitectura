// models/Genero.js
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import Videojuego from "./Videojuego.js";

@Entity()
class Genero {
  @PrimaryGeneratedColumn()
  id;

  @Column({ type: "varchar", length: 50 })
  nombre;

  @ManyToMany(() => Videojuego, (videojuego) => videojuego.generos)
  videojuegos;
}

export default Genero;
