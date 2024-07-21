import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { AdminComponent } from '../../pages/admin/admin.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-product-modal',
  standalone: true,
  imports: [AdminComponent, FormsModule],
  templateUrl: './update-product-modal.component.html',
  styleUrl: './update-product-modal.component.css'
})
export class UpdateProductModalComponent {

  productsService = inject(ProductsService);
  adminComponent = inject(AdminComponent);

  
  nombre: string = "";
  imagen: string = "";
  precioBase: number = 0;
  productIdToUpdate: string ="";
  isUpdating = false;

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
  
          this.adminComponent.obtenerProductos();
        }else{
          console.error("Hubo un error");
          this.isUpdating=false;
        }
      })
    }else{
      console.error("ID es undefined");
    }
  }

  cerrarModal(){
    this.adminComponent.isUpdating = false;
  }
}
