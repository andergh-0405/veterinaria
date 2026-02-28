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
    if (!this.email && !this.password) {
      alert("Error al iniciar")
      return  
    } 
      this.servicioAuth.login(this.email, this.password);
  }



}
