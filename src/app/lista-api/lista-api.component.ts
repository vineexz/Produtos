import { ModelsModule } from './../models/models.module';
import { APIService } from './API/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-api',
  templateUrl: './lista-api.component.html',
  styleUrls: ['./lista-api.component.css']
})
export class ListaAPIComponent implements OnInit {
  produtos: ModelsModule[] = []


  constructor(private api: APIService) {
    this.getLista()
  }
  ngOnInit(): void {}

  getLista(): void {
   this.api.getAll().subscribe((produtos) => (this.produtos = produtos))
  }
}
