import { CatalogoComponent } from './../../catalogo/CatalogoComponent';
import { ModelsModule } from '../../models/models.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaAPIComponent } from '../lista-api.component';

@Injectable({
  providedIn: 'root'

})

export class APIService {
  private readonly api = 'http://localhost:3000/produtos'

  constructor(private http: HttpClient) {  }

    getAll(): Observable<ModelsModule[]> {
    return this.http.get<ModelsModule[]>(this.api)
   }


  }
