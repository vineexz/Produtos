import { ModelsModule } from './../../models/models.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

})

export class APIService {
  private readonly api = ''

  constructor(private http: HttpClient) {  }

   getLista (): Observable<ModelsModule> {
    return this.http.get<ModelsModule>(this.api)
   }
  }
