// Importaciones
import { userModel } from "../models/user.model.js";
import bcrytp from "bcryptjs";
import { generateToken } from "../lib/jwt.js";

// Funcion de generacion de token

// Debe ser asincronica porque maneja peticiones a base de datos
// Se debe recibir una respuesta y una peticion
const loginService = async(req, res) =>{
    // ---------------- Verificar que ese correo exista
    // Desestructurar
    const {correoElectronico, contrasena} = req.body;

    // Verificar que esten en la base de datos
    let user = await userModel.findOne({
        correoElectronico:correoElectronico
    });

    // Verificar si este correo existe

    if(!user){
        return res.status(404).json({
            mensaje: "Usuario no encontrado, por favor registrarse"
        })
    }

    // ------------- Verificar contraseña con la contraseña de la bd
    // 1. Contraseña que ingresa. 2. Contraseña guardada en bases de datos

    let isValidPassword = await bcrytp.compare(contrasena, user.contrasena);

    if(!isValidPassword){
        return res.status(404).json({
            estado:"400",
            mensaje : "Error al iniciar sesion, contraseña incorrecta"
        })
    }

    // Crear el payload para crear token - Informacion del usuario

    const payload = { 
        id: user._id,
        name: user.nombre
    }

    // Validar si es admin
    if(user.categoriaAdmin){
        // Si es admin añada isAdmin = true al payload
        payload.isAdmin = true;
    }

    // generar token

    const token = await generateToken(payload);

    // Si se inicio sesion correctamente y se creo un token mande una respuesta

    return res.status(200).json({
        status : "200",
        mensaje :  "Inicio se sesión exitoso",
        // No se debe poner el token en la practica
        token : token
    })
}