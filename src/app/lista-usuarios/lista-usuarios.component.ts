import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../usuario.service';

@Component({
  selector: 'lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  constructor(public usuarioService : UsuarioService) { }

  ngOnInit(): void {
  }
  
  //verificaCor(){
    //Função para verificar cor 
  //}
}
