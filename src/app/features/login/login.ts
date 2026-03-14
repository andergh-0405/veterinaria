import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email: string = '';
  password: string = '';


  private servicioAuth = inject(AuthService);
  private router = inject(Router);


  iniciarSesion() {
    this.servicioAuth.login(this.email, this.password).subscribe(success => {
      if(success){
        alert('Bienvenido al sistema');
        this.router.navigate(['/usuarios']);
      }else{
        alert('Credenciales incorrectas');
      }
    })
  }
  cerrarSesion() {
    this.servicioAuth.logout();
    alert('Sesion cerrada correctamente');
  }



}
