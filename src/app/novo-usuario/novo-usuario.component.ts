import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../usuario.service';

@Component({
  selector: 'novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  nome = '';
  email = '';
  telefone ='';
  endereco = '';
  idade = 0;
  preferencias = [];
  sexo = '';
  idadeValida: boolean = false ;

  infantil: boolean = false;
  infantoJuvenil: boolean = false;
  romance:boolean = false;
  suspense:boolean = false;
  ficcao:boolean = false;
  biografias:boolean = false;
  saude:boolean = false;
  literaturaBrasil:boolean = false;
  literaturaEstrangeira:boolean = false;
  poesias:boolean = false;

  constructor(private usuarioService : UsuarioService) { }

  ngOnInit(): void {
  }

  idadeValidacao(){
    if(this.idade>=18){
      this.idadeValida=true;
      return true;
    }      
    else{
      this.idadeValida=false;
      return false;
    }      
  }

  constroiPreferencias(){
    if(this.infantil==true)
    this.preferencias.push("Infantil");
    if(this.infantoJuvenil==true)
    this.preferencias.push("Infanto-Juvenil");
    if(this.romance==true)
    this.preferencias.push("Romance");
    if(this.suspense==true)
    this.preferencias.push("Suspense e Terror");
    if(this.ficcao==true)
    this.preferencias.push("Ficção");
    if(this.biografias==true)
    this.preferencias.push("Biografias");
    if(this.saude==true)
    this.preferencias.push("Saúde");
    if(this.literaturaBrasil==true)
    this.preferencias.push("Literatura Brasileira");
    if(this.literaturaEstrangeira==true)
    this.preferencias.push("Literatura Estrangeira");
    if(this.poesias==true)
    this.preferencias.push("Poesias");
  }

  addUsuario(){
    this.constroiPreferencias();
    this.usuarioService.usuarios.push({nome: this.nome, email : this.email, telefone: this.telefone,
       endereco: this.endereco, idade: this.idade, preferencias: this.preferencias, sexo: this.sexo});
    }
}
