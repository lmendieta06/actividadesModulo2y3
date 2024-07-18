import mongoose from "mongoose";

// FUNCION QUE CONECTA CON LA BASE DE DATOS

// FUNCION FLECHA
// No retorna nada
// el async es para no detener el proyecto mientras se espera una respuesta (PETICION)
// export const connectionMongo = async () => {
//     // el await es para que espere la respuesta
//     await mongoose.connect(process.env.CONECTION_DB, {});


// }

// FUNCION DECLARATIVA
// Call back
export async function connectionMongo (){

    try{
        await mongoose.connect(process.env.CONNECTION_DB, {});
        console.log("successful connection to the data base")
    }catch(error){
        console.log("ERROR: ", error.message);
    }
}