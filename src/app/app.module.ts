import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from "./catalogo/CatalogoComponent";
import { HttpClientModule } from '@angular/common/http';
import { ListaAPIComponent } from './lista-api/lista-api.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    ListaAPIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
