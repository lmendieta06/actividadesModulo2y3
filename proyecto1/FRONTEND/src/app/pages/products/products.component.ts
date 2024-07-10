import { Component, inject } from '@angular/core';
import { NavegationComponent } from '../../components/navegation/navegation.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ChatBotComponent } from '../../components/chat-bot/chat-bot.component';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavegationComponent, FooterComponent, ChatBotComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  productsService = inject(ProductsService);

  // Obtener la informacion al hacer la peticion get
  // Aqui se guardaran todos los productos.
  allProducts : any [] = [];

  // Accede a las peticiones, y da una respuesta
  obtenerProductos(){
    // Subscribe es el que da la respuesta
    this.productsService.getProducts().subscribe((res:any) =>{
      if(res){
        console.log(res);
        // Guardar todo en allProducts
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
}
