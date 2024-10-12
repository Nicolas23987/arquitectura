// models/Plataforma.js
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import Videojuego from "./Videojuego.js";

@Entity()
class Plataforma {
  @PrimaryGeneratedColumn()
  id;

  @Column({ type: "varchar", length: 50 })
  nombre;

  @ManyToMany(() => Videojuego, (videojuego) => videojuego.plataformas)
  videojuegos;
}

export default Plataforma;
