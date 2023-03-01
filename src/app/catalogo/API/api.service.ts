import { ModelsModule } from './../../models/models.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'

})

export class APIService {
  private readonly API = ''

  constructor(private http: HttpClient) {  }

   listaAPI() {
    return this.http.get<ModelsModule[]>(this.API);
    }
  }
