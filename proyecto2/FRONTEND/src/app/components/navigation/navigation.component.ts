import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [LoginComponent, RegisterComponent, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})

export class NavigationComponent {

  isVisibleLogin: boolean = false;
  isVisibleSignIn: boolean = false;

  // Hace referencia a un cambio de estado
  toggleLogin() {
    
    this.isVisibleLogin = !this.isVisibleLogin;

    this.isVisibleSignIn = false;
  }

  toggleRegister(){

    this.isVisibleSignIn = !this.isVisibleSignIn;

    this.isVisibleLogin = false;
  }

}
