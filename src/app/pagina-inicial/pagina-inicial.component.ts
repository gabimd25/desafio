import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {
  exibeCadastro: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  exibirCadastro(){
    if(this.exibeCadastro==false)
    this.exibeCadastro=true;
    else
    this.exibeCadastro=false;
  }
}
