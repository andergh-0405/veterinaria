import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { UsuarioService } from '../../services/usuario-service';


@Component({
  selector: 'app-panel-paciente',
  imports: [CommonModule,FormsModule],
  templateUrl: './panel-paciente.html',
  styleUrl: './panel-paciente.css',
})
export class PanelPaciente {

  private servicioUsuario = inject(UsuarioService);
  public servicioAuth = inject(AuthService);

  nombreFiltro = '';
  pacientes =[
    {
      nombre:'Ramon',especie:'Perro',urgencia:'Alta',recuperacion:85
    },
    {
      nombre:'Luna',especie:'Gato',urgencia:'Media',recuperacion:60
    },
    {
      nombre:'Milo',especie:'Conejo',urgencia:'Baja',recuperacion:30
    }
  ];

}
