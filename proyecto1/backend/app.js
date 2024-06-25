// Crear servidor
// Importaciones
// Conexion a servidor (Express)
import express from "express";
// Uso de variables de entorno
import dotenv from "dotenv";
// Variables de entorno -> Guardan informacion a la que no todo el mmundo debe tener acceso
// Importar conexion a bases de datos
import { connectionMongo } from "./config/db.js";
// Importar rutas
import productsRouter from "./routes/productRoutes.js";


// Configurar el uso de nuestro servidor y de nuestras variables de entorno.
// SERVIDOR
const app = express();
// VARIABLES DE ENTORNO
dotenv.config();
// Crear la variable del puerto
const port = process.env.PORT;

// conectar a la bd
connectionMongo();

//  DEBE ESTAR ANTES DE LAS RUTAS
// Se hará un middleware que es un intermediario entre el servidor y las peticiones
// Es para qye se puedan leer y enviar datos en formato json
app.use(express.json());

// Usar las rutas - recibir petciones
// EL / FUNCIONA COMO EL LOCALHOST
app.use("/", productsRouter);

// Pedir que escuche al servidor (ejecutar)
app.listen(port, ()=>{
    console.log(`El servidor se esta escuchando en: http://localhost:${port}`);
});

