import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModelsModule } from '../models/models.module';

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
  public localUrl: any;
  public file?: File;
  public list: Array<{ nome: string, descricao: string, preco: number }> = [  ];


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
   this.Cform(new ModelsModule());
    }


  Cform ( models: ModelsModule){
    this.formulario = this.formBuilder.group({
      nome: [models.nome, Validators.required],
      descricao: [models.descricao, Validators.minLength(3)],
      preco: [models.preco, Validators.maxLength(1)],

    })
   }

  onSubmit(){

    console.log('cliquei no submit');
    this.list.push({
      nome: this.formulario.get('nome')?.value,
      descricao: this.formulario.get('descricao')?.value,
      preco: this.formulario.get('preco')?.value })

    if(this.formulario.valid){
      this.list.push({ nome: '', descricao: '', preco: 0 })
    } else {
      console.log('formulario invalido')
    }
  }

  uploadImage(event: any) {
    this.file = <File>event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
