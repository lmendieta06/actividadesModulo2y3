import { Router } from "express";

import { getAdmins, deleteAdminById, postAdmin } from "../controllers/adminController.js";

const adminRouter = Router();

// Crear rutas

adminRouter.get("/", getAdmins);

adminRouter.post("/", postAdmin);

adminRouter.delete("/:_id", deleteAdminById);

export default adminRouter;