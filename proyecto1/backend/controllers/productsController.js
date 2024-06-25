// Importaciones
import { request } from "express";
import { productModel } from "../models/productsModel.js";

// Prueba inicial de mis controladores
// PETICION GET
// Muestra TODOS los productos
export const getProducts = async(req, res) =>{
    // Manejo de errores
    try{
        /**
         * async es que espere respuesta de la bd
         * await es que reciba lo que viene
        */

        let products = await productModel.find();
        // Siempre va a haber algo guardado, es mejor si se usa como esta con length
        // validar si esta vacio
        if(products.length === 0){
            // No se encontro (404)
            return res.status(404).json({message: "No se encontraron productos"});
        }

        // Todo okey (200)
        return res.status(200).send(products);
    }catch(error){
        // Error en el servidor (500)
        return res.status(500).json({message: "Error del servidor "+ error.message});
    }
}
// PETICION POST
export const postProducts = async(req, res) =>{

    // Decirle que acceda a lo que le estoy enviando
    // body hace referencia al contenido de peticion
    const {nombre, imagen, precioBase} = req.body;

    // Validar de que se hayan ingresado todos los datos
    if(!nombre || !imagen || !precioBase){
        // Error en la peticion (400)
        return res.status(400).json({message: "Debe ingresar todos los campos requeridos"});
    }

    try{
        const newProduct = await productModel.create(req.body);

        // creado exitosamente (201)
        return res.status(201).json(newProduct);
    }catch(error){
        // Error en el servidor (500)
        return res.status(500).json({message: "Error del servidor "+ error.message});

    }

}
// PETICION PUT
export const putProductById = async(req, res) =>{
    try{
        // Acceder al parametro id
        let idForUpdate = req.params._id;
        // Acceder al cuerpo de nuestra peticion
        /**
         * Indicar el ID
         * Luego pedir el cuerpo de la peticion
         */
        let productUpdated = await productModel.findByIdAndUpdate(idForUpdate, req.body);

        // Validacion para cuando no encontramos el producto solicitado
        if(!productUpdated){
            return res.status(404).json({message: "Upss!! El producto solicitado no existe"});
        }

        const {nombre, imagen, precioBase} = req.body;

        // Validar de que se hayan ingresado todos los datos
        if(!nombre || !imagen || !precioBase){
            // Error en la peticion (400)
            return res.status(400).json({message: "Debe ingresar todos los campos requeridos"});
        }

        return res.status(200).json({message: "Producto actualizado satisfactoriamente :)"})

        
    }catch(error){
        // Error en el servidor (500)
        return res.status(500).json({message: "Error del servidor "+ error.message});
    }
}
// PETICION DELETE
export const deleteProductById = async(req, res) =>{

    try{
        let idForDelete = req.params._id;

        let productDeleted = await productModel.findByIdAndDelete(idForDelete);
    
        if(!productDeleted){
            return res.status(404).json({message: "Upss!! No se encontro producto para eliminar"});
        }
    
        return res.status(200).json({message: "Elemento eliminado satisfactoriamente"})
    
    }catch(error){
        // Error en el servidor (500)
        return res.status(500).json({message: "Error del servidor "+ error.message});

    }
}
