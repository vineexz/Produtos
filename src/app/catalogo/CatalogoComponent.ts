import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  public nome: string = '';
  public preco: number = 0;
  public list: Array<{ nome: string, preco: number }> = [];


  constructor() {}
  ngOnInit(): void {}

  public onClickAdd(){
    this.list.push({nome: '', preco: 0})
  }
}
