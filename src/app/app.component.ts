import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'produtos';
  clicarOk: boolean = true;
  condition: boolean = true;
  click: boolean = false;

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

    if(this.click) {
      this.click = false
    } else {
      this.click = true
    }

  }
  }

