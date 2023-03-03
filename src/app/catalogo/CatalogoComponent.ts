import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModelsModule } from '../models/models.module';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  public formulario!: FormGroup;
  public isVisible: boolean = true;
  public submitted: boolean = false;
  public localUrl: any;
  public file?: File;
  public list: Array <{ id: number, nome: string, descricao: string, preco: number, img: any, localUrl: any }> = [];
  public clicarAPI = true



  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
   this.Cform(new ModelsModule());
  }

  Cform ( models: ModelsModule ){
    this.formulario = this.formBuilder.group({
      id: [models.id],
      nome: [models.nome, Validators.required],
      descricao: [models.descricao, Validators.required],
      preco: [models.preco, Validators.required],
      img: [models.img]

    })
   }

  onSubmit(){
    console.log(this.formulario.value);
    if(this.formulario.invalid) {
      this.submitted = true
    } else {
      this.list.push({
        id: this.formulario.get('')?.value,
        nome: this.formulario.get('nome')?.value,
        descricao: this.formulario.get('descricao')?.value,
        preco: this.formulario.get('preco')?.value,
        img: this.formulario.get('img')?.value,
        localUrl: this.formulario.get('localUrl')?.value
        })
        this.submitted = false
    }
    this.formulario.reset()
  }

  onOcult(){
    this.isVisible = false
   }

  toReveal() {
    if(this.isVisible) {
      this.isVisible = false
    } else {
      this.isVisible = true
    }
  }

  onEdit() {

  }

  onCancel(event: number) {
    this.list.splice(event, 1)
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
