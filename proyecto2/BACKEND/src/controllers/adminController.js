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
    try{
        let admins = await adminModel.find();

        if(admins.length === 0){
            return res.status(200).json({message: "No se encontraron administradores registrados"});
        }

        return res.status(200).json({
            estado : 200,
            mensaje: "Se encontraron todos los administradores",
            cantidad: admins.length,
            admins
        })
    }catch(error){
        return res.status(404).json({
            message: "Hubo un error al hacer la peticion " + error.message
        })
    }
}

// Eliminar admin
export const deleteAdminById = async(req, res)=>{
    try{
        let idDelete = req.params._id;
        let adminDelete = await adminModel.findByIdAndDelete(idDelete);

            
        if(!adminDelete){
            return res.status(200).json({
                estado : 200,
                mensaje : "No se encontro el administrador para eliminar"
            })
        }

        return res.status(200).json({
            estado : 200,
            mensaje : "Se elimino correctamente el administrador",
            usuarioEliminado : adminDelete.nombre
        })

    }catch(error){
        return res.status(404).json({
            message: "No se pudo realizar la peticion " + error.message
        })
    }
}