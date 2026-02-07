import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/home-page';
import { Nosotros } from './features/nosotros/nosotros';

export const routes: Routes = [
    //ruta inicial
    {path:'',component:HomePage},
    {path:'nosotros',component:Nosotros},

    //Error 404
    //{path:'**', component:Pagina404}
];
