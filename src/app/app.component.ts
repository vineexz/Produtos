import { CatalogoComponent } from './catalogo/CatalogoComponent';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'produtos';
  destruir: boolean = false;
  clicarok: boolean = true;

  contructor() {}
  ngOnInit(): void {
  }

  page() {

  }
}


