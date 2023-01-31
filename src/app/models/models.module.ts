import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ModelsModule {
  id: number = 0;
  nome: string = '';
  descricao: string = '';
  preco: number = 0;
  estoque: number = 0;
  DataCadastro: Date | undefined;
}
