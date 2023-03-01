import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'produtos';
  click: boolean = false;
  clicarOk: boolean = false;
  condition: boolean = true;

  contructor() {}
  ngOnInit(): void {
  }

  ClickPage() {
    this.clicarOk = true
  }

  ocultarCadastro() {
    this.clicarOk = false
  }

  clickAPI() {
    this.click = true
  }
  ocultarclickAPI() {
    this.click = false
  }
}
