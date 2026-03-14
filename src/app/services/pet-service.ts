import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespuestaApi } from '../models/pet';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  
  private http = inject(HttpClient);

  private API_PET = 'https://vasga-floze.github.io/docs-api-book/books';

  getPets():Observable <RespuestaApi>{
    return this.http.get<RespuestaApi>(this.API_PET);
  }
}
