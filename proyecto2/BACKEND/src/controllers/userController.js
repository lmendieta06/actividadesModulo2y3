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
    try{
        let users = await userModel.find();

        if(users.length === 0){
            return res.status(200).json({message: "No se encontraron usuarios registrados"});
        }

        return res.status(200).json({
            estado : 200,
            mensaje: "Se encontraron todos los usuarios",
            cantidad: users.length,
            users
        })
    }catch(error){
        return res.status(404).json({
            message: "Hubo un error al hacer la peticion" + error.message
        })
    }
}

// Mostrar solo un usuario
export const getUserById = async(req, res)=>{
    try{

        // Requiere el id del usuario
        // El id debe ser llamado igual a como esta escrito en la db
        let idUser = req.params._id;

        if(idUser.length !== 24){
            return res.status(204).json({
                estado : 204,
                mensaje : "Se debe ingresar un Id valido"
            })
        }

        // 1. Dar la variable donde se recibe el id
        // 2. Pedirle que me envie el cuerpo de esa peticion
        let user = await userModel.findById(idUser);

        if(!user){
            return res.status(200).json({
                estado : 200,
                mensaje : "No se encontro el usuario que necesita"
            })
        }

        return res.status(200).json({
            estado : 200,
            mensaje : "Se encontro el siguiente usuario",
            usuario : user
        })

    }catch(error){
        return res.status(404).json({
            message: "No se pudo realizar la peticion " + error.message
        })
    }
}

// Actualizar usuario
export const putUserById = async(req, res)=>{

    try{
        let idUpdate = req.params._id;
        // Se debe poder recibir informacion
        const dataForUpdate = req.body;

        let userUpdate = await userModel.findByIdAndUpdate(idUpdate, dataForUpdate);
    
        if(!userUpdate){
            return res.status(200).json({
                estado : 200,
                mensaje : "No se encontro el usuario para actualizar"
            })
        }

        if(idUpdate.length !== 24){
            return res.status(404).json({
                estado : 404,
                mensaje : "No se ingreso el id necesario "
            })
        }

        return res.status(200).json({
            estado : 200,
            mensaje : "Se actualizo correctamente el usuario",
            dato : userUpdate._id
        })
        
    }catch(error){
        return res.status(404).json({
            message: "No se pudo realizar la peticion " + error.message
        })
    }
    
}

// Actualizar usuario
export const deleteUserById = async(req, res)=>{
    try{
        let idDelete = req.params._id;
        let userDelete = await userModel.findByIdAndDelete(idDelete);

            
        if(!userDelete){
            return res.status(200).json({
                estado : 200,
                mensaje : "No se encontro el usuario para eliminar"
            })
        }

        if(userDelete === "Admin"){
            return res.status(401).json({
                Mensaje : "No se puede eliminar adminstradores desde el panel usuarios"
            })
        }

        return res.status(200).json({
            estado : 200,
            mensaje : "Se elimino correctamente el usuario",
            usuarioEliminado : userDelete.nombre
        })

    }catch(error){
        return res.status(404).json({
            message: "No se pudo realizar la peticion " + error.message
        })
    }
}