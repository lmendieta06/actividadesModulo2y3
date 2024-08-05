import { Router } from "express";

import { getAdmins, deleteAdminById, postAdmin } from "../controllers/adminController.js";

import { auth } from "../middlewares/auth.js";

const adminRouter = Router();

// Crear rutas

adminRouter.get("/", auth(), getAdmins);

adminRouter.post("/", postAdmin);

adminRouter.delete("/:_id", auth(), deleteAdminById);

export default adminRouter;