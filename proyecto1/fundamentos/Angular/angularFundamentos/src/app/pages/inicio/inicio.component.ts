import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavegationComponent } from '../../components/navegation/navegation.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FooterComponent, NavegationComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
