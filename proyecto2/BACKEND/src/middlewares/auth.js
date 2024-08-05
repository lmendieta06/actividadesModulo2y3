// Funcion que verificara el token y sus permisos
import { verifyToken } from "../lib/jwt.js";

// Siempre debe ser req y res (orden)
// next hace parte del middleware

// Opcion para manejar roles
export const auth = (requiredRole) =>{
    
    // Debe ser async para usar el verifyToken
    return async( req, res, next) => {

        // validacion de que se paso un token
        let token = req.headers["authorization"];

        if(!token){
            return res.status(401).json({
                mensaje : "No se encuentra JWS "
            })
        }

        // Extraer el token que se necesita

        token = token.split(" ")[1];

        // Validar si no hay token
        if(!token){
            return res.status(401).json({
                mensaje : "token no autorizado"
            })
        }

        // Verificacion del token
        try{

            // Recibe la informacion del usuario y la decodifica
            const decoded = await verifyToken(token);

            console.log(decoded);

            // Validacion del token
            // Se muestra un objeto con la info del usuario y se guarda en decoded
            req.user = decoded;

            // Autorizacion de admin
            if(requiredRole === "admin" && !decoded.isAdmin){
                return res.status(403).json({
                    mensaje: "Acceso denegado, debe ser administrador para realizar esta acción"
                })
            }


        }catch(error){
            return res.status(401).json({
                status : "401",
                mensaje : "Fallo la autenticacion con el token",
                error : error.message || error
            })
        }


        next(); //Indica que siga con el siguiente middleware o con el controlador
    }
}
