import { Router } from "express";

import { getAdmins, deleteAdminById, postAdmin } from "../controllers/adminController.js";

import { auth } from "../middlewares/auth.js";

const adminRouter = Router();

// Crear rutas

adminRouter.get("/", auth("admin"), getAdmins);

adminRouter.post("/", postAdmin);

adminRouter.delete("/:_id", auth("admin"), deleteAdminById);

export default adminRouter;