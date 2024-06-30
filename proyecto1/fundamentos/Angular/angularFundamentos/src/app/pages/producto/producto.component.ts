import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavegationComponent } from '../../components/navegation/navegation.component';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [FooterComponent, NavegationComponent],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

}
