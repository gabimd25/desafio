import { Injectable } from '@angular/core';

interface Usuario{
  nome : string;
  email : string;
  telefone : string;
  endereco: string;
  idade : number;
  preferencias : string [];
  sexo : string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios : Usuario[] = [];
  constructor() { }
}
