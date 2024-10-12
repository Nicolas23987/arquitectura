import AppDataSource from "../../config/conexion.js"; // Asegúrate de que la ruta sea correcta
import Videojuego from "../models/Videojuego.js";

export class VideojuegoController {
  static async init() {
    await AppDataSource.initialize();
  }

  static async getAll(req, res) {
    try {
      const videojuegoRepository = AppDataSource.getRepository(Videojuego);
      const videojuegos = await videojuegoRepository.find({
        relations: [
          "plataformas",
          "generos",
          "reseñas",
      ],
      });
      console.log(videojuegos)
      return res.json(videojuegos);
    } catch (error) {
      return res.status(500).json({ message: "Error al obtener los videojuegos", error: error.message });
    }
  }
  

  static async create(req, res) {
    try {
      const videojuegoRepository = AppDataSource.getRepository(Videojuego);
      const videojuego = videojuegoRepository.create(req.body);
      await videojuegoRepository.save(videojuego);
      return res.status(201).json(videojuego);
    } catch (error) {
      return res.status(400).json({ message: "Error al crear el videojuego", error });
    }
  }

  static async getOne(req, res) {
    try {
      const { id } = req.params;
      const videojuegoRepository = AppDataSource.getRepository(Videojuego);
      const videojuego = await videojuegoRepository.findOne({ where: { id } });

      if (!videojuego) {
        return res.status(404).json({ message: "Videojuego no encontrado" });
      }

      return res.json(videojuego);
    } catch (error) {
      return res.status(500).json({ message: "Error al obtener el videojuego", error });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const videojuegoRepository = AppDataSource.getRepository(Videojuego);

      let videojuego = await videojuegoRepository.findOne({ where: { id } });
      if (!videojuego) {
        return res.status(404).json({ message: "Videojuego no encontrado" });
      }

      videojuegoRepository.merge(videojuego, req.body);
      await videojuegoRepository.save(videojuego);
      return res.json(videojuego);
    } catch (error) {
      return res.status(400).json({ message: "Error al actualizar el videojuego", error });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const videojuegoRepository = AppDataSource.getRepository(Videojuego);

      const videojuego = await videojuegoRepository.findOne({ where: { id } });
      if (!videojuego) {
        return res.status(404).json({ message: "Videojuego no encontrado" });
      }

      await videojuegoRepository.remove(videojuego);
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: "Error al eliminar el videojuego", error });
    }
  }
}
