// Importar dependencias necesarias
import mongoose from "mongoose";

// crear variable con la dependencia
// Ponerla para exportar (crear modulo)
export const connectionMongo = async () =>{
    // conexion a base de datos
    await mongoose.connect(process.env.CONNECTION_DB,{})
    // Saber si esta funcionando (excepciones (try-catch))
    try{
        console.log("conexion exitosa con la base de datos");
    }catch(error){
        console.error("Error de conexion : ", error.message);
    }
}

/**
 * 
 * Si voy a exportar solo una cosa debo agregar:
 * export default connectionMongo;
 */

// export default connectionMongo;