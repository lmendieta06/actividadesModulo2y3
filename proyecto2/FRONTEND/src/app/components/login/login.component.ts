import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  // Importar funciones del padre
  // Es una funcion tipo void porque funciona con evento
  // = () => {}; la inicializa
  @Input() toggleRegister : () => void = () => {};
}
