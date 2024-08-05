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

        next(); //Indica que siga con el siguiente middleware o con el controlador
    }
}
