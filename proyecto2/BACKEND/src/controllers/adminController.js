// Crear, mostrar, eliminar

import { adminModel } from "../models/admin.model.js";

// Crear  administrador
export const postAdmin = async(req, res)=>{
    return res.send("Funciona la peticion post de administrador");
}

// Mostrar todos los administradores
export const getAdmins = async(req, res)=>{
    return res.send("Funciona la peticion get de administradores");

}

// Eliminar admin
export const deleteAdminById = async(req, res)=>{
    return res.send("Funciona la peticion delete de admin");

}