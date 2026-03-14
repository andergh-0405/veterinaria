import { Component, inject, ViewChild } from '@angular/core';
import { Formulario } from "../../shared/formulario/formulario";

@Component({
  selector: 'app-usuarios',
  imports: [Formulario],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {

  @ViewChild(Formulario) formulario!: Formulario;


  hasUnsavedChanges(): boolean {
    return this.formulario.hasUnsavedChanges();
  }




}
