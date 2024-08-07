import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddProductModalComponent } from '../../components/add-product-modal/add-product-modal.component';
import { UpdateProductModalComponent } from '../../components/update-product-modal/update-product-modal.component';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule, AddProductModalComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  productsService = inject(ProductsService);
  updateModal = inject(UpdateProductModalComponent);

  allProducts : any [] = [];
  isAdding : boolean = false;
  isUpdating : boolean = false;

  nombre: string = "";
  imagen: string = "";
  precioBase: number = 0;
  productIdToUpdate: string ="";

  obtenerProductos(){
    this.productsService.getProducts().subscribe((res:any)=>{
      if(res){
        console.log(res);
        this.allProducts = res;
      }else{
        console.error("Hubo un error");
      }
    })
  }

    // Metodo que permite que se rendericen (muestren en pantalla) los productos con el sitio web

  ngOnInit(){
    // Decir que lo renderice
    this.obtenerProductos();
  }

  agregarProductoModal(){
    this.isAdding = true;
  }

  eliminarProducto(id:string){
    if(id){
      this.productsService.deleteProduct(id).subscribe((req:any)=>{
        if(req){
          alert("Producto eliminado satisfactoriamente");
          // Actualizar la tabla
          this.obtenerProductos();
        }else{
          console.error("Hubo un error");
        }
      })
    }else{
      console.error("ID es undefined");
    }
  }

  // PETICION PUT

  guardarProductoActualizar(producto:any){
    this.productIdToUpdate = producto._id;
    this.nombre = producto.nombre;
    this.imagen = producto.imagen;
    this.precioBase = producto.precioBase;
    this.isUpdating = true;
  }

  actualizarProducto(){
    if(this.productIdToUpdate){

      this.productsService.putProduct(this.nombre, this.imagen, this.precioBase,this.productIdToUpdate).subscribe((req:any)=>{
        if(req){
          alert("Elemento actualizado satisfactoriamente");
          this.isUpdating = false;
          this.nombre = "";
          this.imagen = "";
          this.precioBase = 0;
          this.productIdToUpdate = ""; // Limpiar el ID del producto a actualizar
  
          this.obtenerProductos();
        }else{
          console.error("Hubo un error");
          this.isUpdating=false;
        }
      })
    }else{
      console.error("ID es undefined");
    }
  }
}
