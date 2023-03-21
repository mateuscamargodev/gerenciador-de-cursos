import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaCursosComponent } from './paginas/lista-cursos/lista-cursos.component';
import { FormsModule } from '@angular/forms';
import { FormularioAdicionaComponent } from './paginas/formulario-adiciona/formulario-adiciona.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ListaCursosComponent,
    FormularioAdicionaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
