import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavegationComponent } from '../../components/navegation/navegation.component';

@Component({
  selector: 'app-no-encontrado',
  standalone: true,
  imports: [NavegationComponent, FooterComponent],
  templateUrl: './no-encontrado.component.html',
  styleUrl: './no-encontrado.component.css'
})
export class NoEncontradoComponent {

}
