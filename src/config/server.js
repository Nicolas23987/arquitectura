import express from "express";
import bodyParser from "body-parser";
import videojuegoRoutes from "../routes/videojuego.js";
import AppDataSource from "./conexion.js";
import cors from 'cors';
import path from 'path'; 
import { fileURLToPath } from 'url'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.use(express.static(path.join('src/app/controllers/catalogController.js'))); 
app.use('/html', express.static(path.join(__dirname, 'index.js')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('src/app/views/index.html')); 
});

app.get('/css', (req, res) => {
  res.sendFile(path.resolve('src/styles/tailwind.css')); 
});

app.get('/filter', (req, res) => {
  res.sendFile(path.resolve('src/app/controllers/filtrarVideojuegos.js')); 
});
app.get('/fetch', (req, res) => {
  res.sendFile(path.resolve('src/app/controllers/obtenerVideojuegos.js')); 
});
app.get('/render', (req, res) => {
  res.sendFile(path.resolve('src/app/controllers/mostrarListaVideojuegos.js')); 
});



app.use("/api/videojuegos", videojuegoRoutes);

const startServer = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Conexión a la base de datos exitosa");

    // Iniciar servidor
    app.listen(3000, () => {
      console.log("Servidor corriendo en http://localhost:3000");
    });
  } catch (error) {
    console.log("Error de conexión a la base de datos:", error);
  }
};

export { app, startServer }; 
