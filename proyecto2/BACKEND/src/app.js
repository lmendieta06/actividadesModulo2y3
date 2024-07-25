// Servidor
import express from "express";
// Variables de entorno
import dotenv from "dotenv";
// Arreglar error de seguridad al hacer peticiones
import cors from "cors";
// Conexion a la bd
import { connectionMongo } from "./config/db.js";
// Importar rutas usuario
import userRouter from "./routes/user.routes.js";
// Importar rutas administrador
import adminRouter from "./routes/admin.routes.js";

// CONFIGURACION SERVIDOR
const app = express();
// ACCEDER A VARIABLES DE ENTORNO
dotenv.config();
// LOS CORS SON MIDDLEWARE
app.use(cors());

// CREAR LA VARIABLE DEL PUERTO
// Decirle que si algo pasa con el puerto asignado, use la otra opcion
// const port = process.env.PORT_1 || process.env.PORT_2;

// TERNARIOS (CONDICIONALES DE UNA SOLA LINEA)
const port = process.env.PORT_1? process.env.PORT_1 : 6000;

// CONEXION A LA BASE DE DATOS
connectionMongo();

// Especificar que se van a enviar y se deben recibir archivos .json
app.use(express.json());
// Usar las rutas
// Esta es la ruta madre de usuarios
app.use("/users", userRouter);
// Esta es la ruta madre de administrador
app.use("/admin", adminRouter);

// PEDIR QUE LO ESCUCHE
app.listen(port, ()=>{
    console.log(`SERVER PORT: http://localhost:${port}`);
});
