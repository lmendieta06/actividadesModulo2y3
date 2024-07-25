// SUPERCLASE

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required:true
    },
    correoElectronico:{
        type:String,
        required:true,
        unique:true
    },
    contrasena:{
        type:String,
        required:true
    },
    imagenPerfil:{
        type: String
    }

});

// Nombre coleccion - esquema
export const userModel = mongoose.model("Usuario", userSchema);

