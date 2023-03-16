import { ModelsModule } from './../models/models.module';
import { Component, OnInit } from '@angular/core';
import { APIService } from '../API/api.service';

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

  removeCard(produtos: ModelsModule) {
    this.produtos = this.produtos.filter((a) => produtos.id !== a.id)
    this.api.remove(produtos.id).subscribe();
  }
}
