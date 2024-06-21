// Crear servidor
/**
  1- importar dependencias y modulos necesarios

 */

// Importaciones
// Conexion a servidor (Express)
import express from "express";
// Uso de variables de entorno
import dotenv from "dotenv";
// Variables de entorno -> Guardan informacion a la que no todo el mmundo debe tener acceso
// Importar conexion a bases de datos
import { connectionMongo } from "./config/db.js";


// Configurar el uso de nuestro servidor y de nuestras variables de entorno.
// SERVIDOR
const app = express();
// VARIABLES DE ENTORNO
dotenv.config();
// Crear la variable del puerto
const port = process.env.PORT;

// conectar a la bd
connectionMongo();

// EJEMPLO DE HACER PETICION
// app.get(`/`, (req, res)=>{
//   // DECIRLE QUE DEBE DAR ESA RESPUESTA 
//   res.send("HOLAAAAA, ESTO ES UNA PETICION A MI SERVIDOR");
// });

// Pedir que escuche al servidor (ejecutar)
app.listen(port, ()=>{
    console.log(`El servidor se esta escuchando en: http://localhost:${port}`);
});

