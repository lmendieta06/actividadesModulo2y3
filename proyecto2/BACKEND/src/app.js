// Servidor
import express from "express";
// Variables de entorno
import dotenv from "dotenv";
// Arreglar error de seguridad al hacer peticiones
import cors from "cors";

// CONFIGURACION SERVIDOR
const app = express();
// ACCEDER A VARIABLES DE ENTORNO
dotenv.config();
// CREAR LA VARIABLE DEL PUERTO
const port = process.env.PORT;
// LOS CORS SON MIDDLEWARE
app.use(cors());
// PEDIR QUE LO ESCUCHE
app.listen(port, ()=>{
    console.log(`El servidor se esta escuchando en: http://localhost:${port}`);
});
