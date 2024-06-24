// Importaciones
// Express sirve para manejar rutas
import express from "express";
// Controladores
import { getProducts, postProducts, deleteProductById, putProductById } from "../controllers/productsController.js";

// Configurar el router de express
const productsRouter = express.Router();


// DEFINIR RUTAS
/**
 * 1. DETERMINAR RUTA
 * 2. DECIR QUE DEBE HACER
 */

// RUTA GET
productsRouter.get("/obtenerProductos", getProducts);

// RUTA POST
productsRouter.post("/agregarProducto", postProducts);

// PARA DELETE Y PUT SE DEBE ESPECIFICAR EL PRODUCTO POR ID, SE LE AGREGA /:_id A LA RUTA
// RUTA PUT
productsRouter.put("/actualizarProducto/:_id", putProductById);

// RUTA DELETE
productsRouter.delete("/eliminarProducto/:_id", deleteProductById);

export default productsRouter;