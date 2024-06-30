import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"catalogo", component:ProductsComponent},
    {path:"administrador", component:AdminComponent},
    {path:"login", component:LoginComponent},
    {path: "**", component:NoEncontradoComponent}

];
