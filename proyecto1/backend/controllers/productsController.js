// Importaciones
import { productModel } from "../models/productsModel.js";

// Prueba inicial de mis controladores
// PETICION GET
export const getProducts = async(req, res) =>{
    return res.send("Funciona la peticion get");
}
// PETICION POST
export const postProducts = async(req, res) =>{
    return res.send("Funciona la peticion post");
}
// PETICION PUT
export const putProductById = async(req, res) =>{
    return res.send("Funciona la peticion put");
}
// PETICION DELETE
export const deleteProductById = async(req, res) =>{
    return res.send("Funciona la peticion delete");
}
