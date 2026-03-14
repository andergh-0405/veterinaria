import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { Formulario } from '../shared/formulario/formulario';
import { Usuarios } from '../features/usuarios/usuarios';

export const desactiveGuard: CanDeactivateFn<Usuarios> = (component: Usuarios, 
  currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) => {

  return component.hasUnsavedChanges()
  ? confirm('Tienes cambios sin guardar. ¿Estás seguro de que deseas salir?')
  : true; 

}
