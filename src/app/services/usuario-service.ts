import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private http = inject(HttpClient);
  private API_FIREBASE = 'http://localhost:8080/usuarios';

  //Metodo get
  getUsuarios(): Observable<Usuario[]> {
    /*return this.http.get<{ [key: string]: Usuario }>(`${this.API_FIREBASE}/users.json`).pipe(
      map(respuestaFirebase => {
        if (!respuestaFirebase) {
          return [];
        }
        return Object.keys(respuestaFirebase).map(id => {
          const usuarioConId = { ...respuestaFirebase[id], id: id };
          return usuarioConId;
        })
      })
    )*/ return this.http.get<Usuario[]>(`${this.API_FIREBASE}`);
  }

  //Metodo post
  postUsuario(usuario: Usuario):Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API_FIREBASE}/guardarUsuario`,usuario);
  }

  //Metodo PUT
  putUsuario(id:string, usuario:Usuario):Observable<Usuario> {
    return this.http.put<Usuario>(`${this.API_FIREBASE}/actualizarUsuario/${id}`,usuario);
  }

  //Metodo delete}
  deleteUsuario(id:string):Observable<void> {
    return this.http.delete<void>(`${this.API_FIREBASE}/eliminarUsuario/${id}`);
  }

  //metodo para obtner solo el rol del usuario
  /*getRolUsuario(id:string):Observable<string> {
    return this.http.get<{ rol: string }>(`${this.API_FIREBASE}/users/${id}.json`).pipe(
      map(respuesta => respuesta.rol)
    );
  }*/

}
