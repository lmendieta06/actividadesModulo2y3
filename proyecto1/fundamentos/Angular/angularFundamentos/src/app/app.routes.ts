import { Routes } from '@angular/router';

// Importar componentes a usar (pages).

import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';

// Definir las rutas que deben ir en nuestras paginas

export const routes: Routes = [
    // CREACION DE PATHS
    // RUTA INICIO
    {path:"inicio", component : InicioComponent},
    // RUTA PRODUCTOS
    {path:"productos", component:ProductoComponent},
    // HACER QUE AL ENTRAR REDIRECCIONE A LA PAGINA INICIO 
    {path: "", redirectTo:"/inicio", pathMatch: 'full'},
    // REDIRECCIONAMIENTO A PAGINA DE NO ENCONTRADO
    // EL ** SIGNIFICA "CUALQUIER OTRA RUTA"
    {path: "**", component:NoEncontradoComponent}

];
