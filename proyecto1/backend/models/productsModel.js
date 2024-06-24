// Importaciones
import mongoose from "mongoose";

// Decirle que quiero guardarlo en un schema, asi crear la plantilla productos
const schema = mongoose.Schema;

// Es mejor trabajar con constantes estas plantillas
// Se esta creando un constructor
const productSchema = new schema({

    nombre:{
        // ESPECIFICAR TIPO DE DATO
        type: String,
        // HACERLO OBLIGATORIO
        require:true
    },
    imagen:{
        type: String,
    },
    precioBase:{
        type: Number,
        require:true
    }
});

// Utilizamos la plantilla para crear una coleccion
// CREACION DE COLECCION
// Esta funcion sirve para crear modelos
/**
 * PARAMETROS A DAR
 * 1. NOMBRE DE LA COLECCION QUE VA A GUARDAR EN LA BD
 * 2. DAR COMO PARAMETRO EL ESQUEMA QUE HICIMOS
 */
export const productModel = mongoose.model("producto", productSchema);
