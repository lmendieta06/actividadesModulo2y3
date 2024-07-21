// CLASE HIJA
import mongoose from "mongoose";
// Hereda de userModel
import { userModel } from "./user.model.js";

const adminSchema = new mongoose.Schema({
    categoriaAdmin: {
        type: Boolean,
        required:true,
        // Esto dice que esta categoria DEBE ser verdadera para que sea admin
        default:true
    }
});

// CADA QUE SE QUIERA HEREDAR, SE DEBE HACER DE LA SIGUIENTE MANERA
// mongoose tiene un metodo que es discriminator la cual permite crear un modelo de admin basado en otro modelo, en este caso user

export const adminModel = userModel.discriminator("Admin", adminSchema);