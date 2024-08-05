// Express sirve para manejar las rutas
import {Router} from "express";
// Importar los controladores de usuario
import { getUsers, getUserById, postUser, deleteUserById, putUserById } from "../controllers/userController.js";

import { auth } from "../middlewares/auth.js";
// Configurar el router
const userRouter = Router();

// Definir rutas
// El _id no tiene que ser asi necesariamente, puede escribirse normal, es una guía.

// Estas peticiones vienen de express, con Router
userRouter.get("/", auth(), getUsers);

userRouter.get("/:_id", auth(),getUserById);

userRouter.post("/", postUser);

userRouter.delete("/:_id", auth("admin"),deleteUserById);

userRouter.put("/:_id", auth("admin"),putUserById);

// Se importa en app.js
export default userRouter;