// models/Videojuego.js (actualizado)
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, OneToMany, JoinTable } from "typeorm";
import Reseña from "./Reseña.js";
import Genero from "./Genero.js";
import Plataforma from "./Plataforma.js";

@Entity("videojuego")
class Videojuego {
  @PrimaryGeneratedColumn()
  id;

  @Column({ type: "varchar", length: 100 })
  nombre;

  @Column({ type: "varchar", length: 250 })
  imagen;

  @Column({ type: "varchar", length: 50, nullable: true })
  genero;

  @Column({ type: "date", nullable: true })
  fecha_lanzamiento;

  @Column({ type: "text", nullable: true })
  sinopsis;

  @Column({ type: "decimal", precision: 10, scale: 2, nullable: true })
  precio;

  @OneToMany(() => Reseña, (reseña) => reseña.videojuego)
  reseñas;

  @ManyToMany(() => Plataforma, (plataforma) => plataforma.videojuegos)
  @JoinTable({
    name: 'videojuegos_plataformas',
    joinColumn: {
      name: 'videojuegoId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'plataformaId',
      referencedColumnName: 'id',
    },
  })
  plataformas;


  @ManyToMany(() => Genero, genero => genero.videojuegos)
  @JoinTable({
    name: 'videojuegos_generos', // nombre de la tabla intermedia
    joinColumn: {
      name: 'videojuegoId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'generoId',
      referencedColumnName: 'id',
    },
  })
  generos;

}

export default Videojuego;
