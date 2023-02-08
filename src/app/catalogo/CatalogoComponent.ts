import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  public formulario!: FormGroup ;
  public nome: string = '';
  public descricao: string = '';
  public preco: number = 0;
  public list: Array<{ nome: string, descricao: string, preco: number }> = [];


  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [''],
      descricao: [''],
      preco: [0]
    })
  }

  public onClickAdd(){
    this.formulario.value
    console.log('Formulario valido', this.formulario.value);

  }
}
