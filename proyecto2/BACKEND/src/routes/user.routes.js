// Express sirve para manejar las rutas
import {Router} from "express";
// Importar los controladores de usuario
import { getUsers, getUserById, postUser, deleteUserById, putUserById } from "../controllers/userController.js";

// Configurar el router
const userRouter = Router();

// Definir rutas
// El _id no tiene que ser asi necesariamente, puede escribirse normal, es una guía.

// Estas peticiones vienen de express, con Router
userRouter.get("/", getUsers);

userRouter.get("/:_id", getUserById);

userRouter.post("/", postUser);

userRouter.delete("/:_id", deleteUserById);

userRouter.put("/:_id", putUserById);

// Se importa en app.js
export default userRouter;