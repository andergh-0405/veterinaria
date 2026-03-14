import { inject, Inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { sign } from 'crypto';
import { getAuth, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { map, Observable } from 'rxjs';
import { Usuarios } from '../features/usuarios/usuarios';
import { UsuarioService } from './usuario-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  /*
  private router = Inject(Router);
  private usuario: User | null = null;
  private auth= getAuth();


  login(email:string, password:string){
    //Metodo de firebase auth que permite iniciar sesion 
    signInWithEmailAndPassword(this.auth,email,password)
    //Ejecutar cuando inicia sesion correctamenete
    .then(usuarioAutenticado =>{
      this.router.navigate(['/usuarios'])
      this.usuario = usuarioAutenticado.user})
    //Ejecutar cuando falla el inicio de sesion
    .catch(err =>
      console.log(this.router.navigate(['/login'])
    ));
  }

  logout(){
    signOut(this.auth);
    this.usuario=null;

  }*/

  private servicioUsuario = inject(UsuarioService);

  sesionIniciada = signal<boolean>(localStorage.getItem('sesion') === 'true');

  rolActual = signal<string | null>(localStorage.getItem('rol'));

  login(email: string, password: string): Observable<boolean> {
    return this.servicioUsuario.getUsuarios().pipe(
      map(usuarios => {
        const usuarioCoincide = usuarios.find(u => u.email === email &&
          u.password === password);
        if (usuarioCoincide) {
          localStorage.setItem('sesion', 'true');
          localStorage.setItem('usuario', JSON.stringify(usuarioCoincide));

          localStorage.setItem('rol', usuarioCoincide.rol);
          this.rolActual.set(usuarioCoincide.rol);
          this.sesionIniciada.set(true);

          return true;
        }
        return false;
      })
    );

  }

  logout() {
    localStorage.removeItem('sesion');
    localStorage.removeItem('usuario');
    this.sesionIniciada.set(false);
    
    localStorage.removeItem('rol');
    this.rolActual.set(null);
  }

}







