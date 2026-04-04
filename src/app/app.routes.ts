import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/home-page';
import { Nosotros } from './features/nosotros/nosotros';
import { Consultas } from './features/consultas/consultas';
import { ServiciosPage } from './features/servicios-page/servicios-page';
import { MascotasPage } from './features/mascotas-page/mascotas-page';
import { Usuarios } from './features/usuarios/usuarios';
import { Login } from './features/login/login';
import { authGuard } from './guards/auth-guard';
import path from 'path';
import { PanelPaciente } from './shared/panel-paciente/panel-paciente';
import { desactiveGuard, } from './guards/desactive-guard';
import { Formulario } from './shared/formulario/formulario';
import { guaMatchGuard } from './guards/gua-match-guard';
import { features } from 'process';
import { Dasboard } from './features/dasboard/dasboard';

export const routes: Routes = [
    //ruta inicial
    {path:'login',component:Login},
    {path:'',component:HomePage, canActivateChild:[authGuard], children:[
        {path:'panel',component:PanelPaciente}
    ]},
    {path:'consultas',component:Consultas,canMatch:[guaMatchGuard]},
    {path:'servicios',component:ServiciosPage},
    {path:'mascotas',component:MascotasPage},
    {path: 'usuarios',component:Usuarios,canActivate:[authGuard],canDeactivate:[desactiveGuard],children:[
        {path:'formulario',component:Formulario}
    ]},
    {path:'dasboard',component:Dasboard,canMatch:[guaMatchGuard]},
    


    
    //{path:'**', component:Pagina404}
];
