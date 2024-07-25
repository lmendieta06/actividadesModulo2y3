// Crear, mostrar, eliminar

import { adminModel } from "../models/admin.model.js";

// Crear  administrador
export const postAdmin = async(req, res)=>{
    try{
        // DESESTRUCTURAR
        const {nombre, correoElectronico, contrasena} = req.body;
        // El await es para indicar que debe esperar una respuesta
        // Lo que hace es detenerse en esta linea de codigo, esperar la respuesta y al obtenerla sigue con el resto de lineas
        const newAdmin = await adminModel.create({
            nombre,
            correoElectronico, 
            contrasena,
            // Asegurarse de que DEBE ser true para que sea admin
            categoriaAdmin:true
        });

        // Debe ser 201 porque este dice que esta creado
        // Al crearlo lo va a mostrar en consola
        return res.status(201).json({
            estado: "201",
            mensaje: "Administrador creado correctamente",
            datos: newAdmin
        });
    }catch(error){
        // Seria error 400 porque no encuentra la peticion como tal
        return res.status(400).json({
            estado: "400",
            message: "No se logro crear el administrador" + error.message
        })
    }
}

// Mostrar todos los administradores
export const getAdmins = async(req, res)=>{
    return res.send("Funciona la peticion get de administradores");

}

// Eliminar admin
export const deleteAdminById = async(req, res)=>{
    return res.send("Funciona la peticion delete de admin");

}