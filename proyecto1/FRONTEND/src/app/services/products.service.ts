import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  httpClient = inject(HttpClient);

  // Crear variables de entorno para cada peticion

  API_URL_GET = "http://localhost:3000/obtenerProductos";
  API_URL_POST = "http://localhost:3000/agregarProducto";
  API_URL_PUT = "http://localhost:3000/actualizarProducto";
  API_URL_DELETE = "http://localhost:3000/eliminarProducto";

  // OBTENER DATOS
  getProducts(){
    // Hago la peticion get
    return this.httpClient.get(this.API_URL_GET);
  }

  // CREAR DATOS
  // Esta funcion recibe parametros
  postProduct(nombre:string,  imagen:string, precioBase:number){
    // Crear objeto que envia la informacion
    const infoProducto = {
      nombre:nombre,
      imagen:imagen,
      precioBase:precioBase
    }

    return this.httpClient.post(this.API_URL_POST, infoProducto);
  }

  // MODIFICAR DATOS
  putProduct(nombre:string, imagen:string, precioBase:number, id:string ){
    // Objeto que contiene la informacion a modificar
    const infoProducto = {
      nombre:nombre,
      imagen:imagen,
      precioBase:precioBase
    }

    return this.httpClient.put(`${this.API_URL_PUT}/${id}`, infoProducto);

  }
  // ELIMINAR DATOS

  deleteProduct(id:string){

    return this.httpClient.delete(`${this.API_URL_DELETE}/${id}`);
  }
  
}
