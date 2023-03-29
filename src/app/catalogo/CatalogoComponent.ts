import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  public localUrl: any;
  public file?: File;

  public produtos: ModelsModule[] = [] ;

  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
      preco: new FormControl('' , [Validators.required]),
    })
  }
  get id() {
    return this.formulario.get('id');
  }
  get nome() {
    return this.formulario.get('nome')!;
  }
  get descricao() {
    return this.formulario.get('descricao')!;
  }
  get preco() {
    return this.formulario.get('preco')!;
  }

  onSubmit(){

    if(this.formulario.invalid) {
      console.log('formulario invalido');
      return
    }else {
      console.log('enviou o formulario');
      console.log(this.formulario.value)
    }

  }

  toReveal() {
    if(this.isVisible) {
      this.isVisible = false
    } else {
      this.isVisible = true
    }
  }

  enviarApi(produtos: ModelsModule) {
    this.api.getAdd(this.produtos).subscribe(
      () => this.produtos.push()
    )
}

  onCancel(event: number) {
    this.produtos.splice(event, 1)
  }


  // Upload da img assim que terminar todas as questões do formulario
  // uploadImage(event: any) {
  //   this.file = <File>event.target.files[0];
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();
  //     reader.onload = (event: any) => {
  //       this.localUrl = event.target.result;
  //     }
  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  // }
}
