// Dependencia que nos permite usar
import jwt from "jsonwebtoken";
// Configurar la contraseña de jws
const secretKey = process.env.CONTRASENA_JWS;

// Generar funciones de generar y verificar token
// No son promesas, por lo que no necesitan ser async pero es mejor hacerlo para poder mejorar flujo de la informacion

export function generateToken(payload){
    // Se asegura de que lo que se cree al llamar la funcion sea asincronico
    // LO que esta dentro de los primeros parentesis sera como un try catch
    return new Promise((resolve, reject)=>{
        // Para generar el token se necesita la clave, el payload, tiempo se expiracion de token
        // Crear la firma
        // El expire es la duracion del token, en este caso una hora
        jwt.sign(payload, secretKey, {expiresIn: "1h"}, (error, token)=>{
            // Manejo de errores en la funcion creada
            // Validar si hay error al crear token

            if(error){
                reject(new Error("Error al generar jsonwebtoken", error.message));
            }else{
                resolve(token);
            }
        });
    });
}

export function verifyToken(token){

    // Tambien se crea como una promesa, para que maneje el flujo de usuarios

    return new Promise((resolve, reject)=>{
        jwt.verify(token, secretKey, (error, decoded)=>{
            // Manejar errores
            // Validar si se decodifico el token correctamente
            
            if(error){
                reject(new Error("Error al decodificar jsonwebtoken", error.message));
            }else{
                resolve(decoded);
            }
        })
    })
}