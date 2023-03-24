import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from '../API/api.service';
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

  public produtos: ModelsModule[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private api: APIService) {

  }

  ngOnInit() {
    this.Cform(new ModelsModule());
    this.api.getAll()
  }

  Cform ( models: ModelsModule ){
    this.formulario = this.formBuilder.group({
      id: [models.id, Validators.required],
      nome: [models.nome, Validators.required],
      descricao: [models.descricao, Validators.required],
      preco: [models.preco, Validators.required]
    })
   }

  onSubmit(){
    console.log(this.formulario.value);
    if(this.formulario.invalid) {
      this.submitted = true
    } else {
      console.log(this.produtos);
      this.produtos.push({
        id: this.formulario.get('id')!.value,
        nome: this.formulario.get('nome')?.value,
        descricao: this.formulario.get('descricao')?.value,
        preco: this.formulario.get('preco')?.value,
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

  enviarApi() {
    this.api.getAdd(this.produtos).subscribe(
    
      () => console.log('sucesso')

      )
    }

  onCancel(event: number) {
    this.produtos.splice(event, 1)
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
