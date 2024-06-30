import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  // Asi es como se exporta en el html
  selector: 'app-navegation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navegation.component.html',
  styleUrl: './navegation.component.css'
})

export class NavegationComponent {

}
