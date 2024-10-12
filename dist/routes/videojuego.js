import { Router } from "express";
import { VideojuegoController } from "../app/controllers/VideojuegoController.js"; // Asegúrate de que la ruta sea correcta

var router = Router();
router.get("/", VideojuegoController.getAll); // Obtener todos los videojuegos
router.post("/", VideojuegoController.create); // Crear un nuevo videojuego
router.get("/:id", VideojuegoController.getOne); // Obtener un videojuego por ID
router.put("/:id", VideojuegoController.update); // Actualizar un videojuego
router["delete"]("/:id", VideojuegoController["delete"]); // Eliminar un videojuego

export default router;