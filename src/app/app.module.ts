import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import {FormsModule} from '@angular/forms';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    NovoUsuarioComponent,
    PaginaInicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
