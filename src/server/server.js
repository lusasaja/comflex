import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

// Middleware para habilitar CORS
app.use(cors());
app.use(express.json()); // Para manejar JSON

app.get("/", (req, res) => {
  res.json("¡La API de Comflex anda bien!")
})

// Ruta de ejemplo
app.get('/api/hello', (req, res) => {
  res.json('Hello from Preact API!');
});

// Puedes agregar más rutas aquí

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor API escuchando en http://localhost:${port}`);
});