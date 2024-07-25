// Crear, Actualizar y Eliminar usuarios, 
// poder visualizar todos mis usuarios o un solo usuario
import { userModel } from "../models/user.model.js";

// Crear  usuario
export const postUser = async(req, res)=>{

    // No se hara el if porque esa condicion ya se evalua en el modelo

    try{
        // El await es para indicar que debe esperar una respuesta
        // Lo que hace es detenerse en esta linea de codigo, esperar la respuesta y al obtenerla sigue con el resto de lineas
        const newUser = await userModel.create(req.body);

        // Debe ser 201 porque este dice que esta creado
        // Al crearlo lo va a mostrar en consola
        return res.status(201).json({
            estado: "201",
            mensaje: "Usuario creado correctamente",
            datos: newUser
        });
    }catch(error){
        // Seria error 400 porque no encuentra la peticion como tal
        return res.status(400).json({
            estado: "400",
            message: "No se logro crear el usuario" + error.message
        })
    }

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