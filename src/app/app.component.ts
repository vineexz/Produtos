import { CatalogoComponent } from './catalogo/CatalogoComponent';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'produtos';
  clicarOk: boolean = true;


  contructor() {}
  ngOnInit(): void {
  }

  ClickPage() {
    this.clicarOk = true;
  }
}
