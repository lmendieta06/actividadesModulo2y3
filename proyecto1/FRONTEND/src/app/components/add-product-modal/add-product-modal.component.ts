import { Component, inject } from '@angular/core';
import { AdminComponent } from '../../pages/admin/admin.component';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product-modal',
  standalone: true,
  imports: [AdminComponent, FormsModule],
  templateUrl: './add-product-modal.component.html',
  styleUrl: './add-product-modal.component.css'
})

export class AddProductModalComponent {

  productsService = inject(ProductsService);
  adminComponent = inject(AdminComponent);

  nombre: string = "";
  imagen: string = "";
  precioBase: number = 0;

  agregarProducto(){

    this.productsService.postProduct(this.nombre,this.imagen, this.precioBase).subscribe((req:any)=>{
      if(req){
        alert("Elemento agregado satisfactoriamente");
        this.adminComponent.isAdding = false;
        this.nombre = "";
        this.imagen = "";
        this.precioBase = 0;
        this.adminComponent.obtenerProductos();
      }else{
        console.error("Hubo un error");
        this.adminComponent.isAdding=false;
      }
    })

    this.adminComponent.isAdding = false;
  }

  cerrarModal(){
    this.adminComponent.isAdding = false;
  }
}


