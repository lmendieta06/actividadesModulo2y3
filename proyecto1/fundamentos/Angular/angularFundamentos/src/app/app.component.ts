import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { NavegationComponent} from './components/navegation/navegation.component';
// import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// Componente principal
export class AppComponent {
  // Aqui va la logica del proyecto
  title = 'angularFundamentos';
}
