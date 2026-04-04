import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { UsuarioService } from '../services/usuario-service';
import { map } from 'rxjs';

export const guaMatchGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {

  const usuarioService = inject(UsuarioService);

  const usuario = JSON.parse(localStorage.getItem('usuario')!);
  const router = inject(Router);

  if (usuario.rol === 'ROLE_ADMIN') {
    return router.parseUrl('/usuarios');
  }else if(usuario.rol === 'ROLE_VETERINARIO'){
    return router.parseUrl('/consultas');
  }else{
    return router.parseUrl('/');
  }

 /* return usuarioService.getRolUsuario(usuario.id).pipe(
    map(rol => rol === 'ROLE_ADMIN')
  );*/

};
