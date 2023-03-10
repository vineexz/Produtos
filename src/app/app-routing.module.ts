import { ListaAPIComponent } from './lista-api/lista-api.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from "./catalogo/CatalogoComponent";

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'Catalogos', component: CatalogoComponent},
  {path: 'Catalogos/ListaAPI/:id', component: ListaAPIComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
