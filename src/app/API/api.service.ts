import { ModelsModule } from '../models/models.module';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

})

export class APIService implements OnInit {
  private readonly api = 'http://localhost:3000/produtos'

  constructor(private http: HttpClient) {  }
  ngOnInit(){
  }

    getAll(): Observable<ModelsModule[]> {
    return this.http.get<ModelsModule[]>(this.api)
   }

   remove(id: number) {
    return this.http.delete<ModelsModule>(`${this.api}/${id}`);
   }

   getAdd(produtos: any) {
    return this.http.post(this.api, produtos)
   }
  }
