// Crear, Actualizar y Eliminar usuarios, 
// poder visualizar todos mis usuarios o un solo usuario
import { userModel } from "../models/user.model.js";

// Crear  usuario
export const postUser = async(req, res)=>{
    return res.send("Funciona la peticion post de los usuarios");
}

// Mostrar todos los usuarios
export const getUsers = async(req, res)=>{
    return res.send("Funciona la peticion get de los usuarios");

}

// Mostrar solo un usuario
export const getUserById = async(req, res)=>{
    return res.send("Funciona la peticion get de un solo usuarios");

}

// Actualizar usuario
export const putUserById = async(req, res)=>{
    return res.send("Funciona la peticion put de usuarios");

}

// Actualizar usuario
export const deleteUserById = async(req, res)=>{
    return res.send("Funciona la peticion delete de usuarios");

}