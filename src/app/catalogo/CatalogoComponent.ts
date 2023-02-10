import { SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModelsModule } from '../models/models.module';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  public formulario: FormGroup | any;
  public list: Array<{ nome: string, descricao: string, preco: number }> = [];


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
   this.Cform(new ModelsModule());
    }


  Cform ( models: ModelsModule){
    this.formulario = this.formBuilder.group({
      nome: [models.nome, Validators.required],
      descricao: [models.descricao, Validators.minLength(3)],
      preco: [models.preco, Validators.maxLength(1)]
    })
   }

  onSubmit(){
    if(this.formulario.valid){
    console.log('formulario valido', this.formulario.value);
    } else {
      console.log('formulario invalido');
    }
  }}
