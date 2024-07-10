import { Component, inject } from '@angular/core';
// Redirigir a otra pagina
import { Router } from '@angular/router';
// Funcionamiento del forms
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // Decir que se va a usar esta dependencia
  router = inject(Router);

  // Agregar datos que de deben validar
  administrador = {
    usuario: "laumendieta06_admin48",
    contrasena: "1234567"
  }

  // Crear variables que recibiran los valores del formulario

  usuario: string = "";
  contrasena: string = "";

  iniciarSesionAdmin(){
    if(this.usuario === this.administrador.usuario && this.contrasena === this.administrador.contrasena){
      alert("Bienvenido administrador");
      // REDIRECCIONAR A PAGINA ADMIN
      this.router.navigate(["/administrador"]);
    }else{
      alert("Verifique el usuario y la contraseña")
    }
  }

}
