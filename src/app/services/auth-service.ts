import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { sign } from 'crypto';
import {getAuth,signInWithEmailAndPassword,signOut,User} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

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
  }


  
}
