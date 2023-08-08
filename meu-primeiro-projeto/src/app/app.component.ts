import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <app-title *ngIf="destruir"></app-title>
  <br>
  <button (click)="destruirComponente()">Destruir componente</button>
  <app-diretivas-estruturais></app-diretivas-estruturais>
  <router-outlet></router-outlet>
  `
})

export class AppComponent implements OnInit {
  
  public destruir:boolean = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=> {
      console.log(1)
    }, 5000)
  }

  public destruirComponente() {
    this.destruir = false;
  }
}
