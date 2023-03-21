import { FormularioAdicionaComponent } from './paginas/formulario-adiciona/formulario-adiciona.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCursosComponent } from './paginas/lista-cursos/lista-cursos.component';

const routes: Routes = [
  { path: '', component: FormularioAdicionaComponent},
  { path: 'lista-cursos', component: ListaCursosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
