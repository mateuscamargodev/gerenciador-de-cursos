import { Curso } from 'src/app/interfaces/curso';
import { NgForm } from '@angular/forms';
import { CursoServiceService } from '../../services/curso-service.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-formulario-adiciona',
  templateUrl: './formulario-adiciona.component.html',
  styleUrls: ['./formulario-adiciona.component.css']
})
export class FormularioAdicionaComponent implements OnInit {

  constructor(private cursoService: CursoServiceService, public router: Router) { }

  ngOnInit(): void {
  }

  trocaPagina() {
    this.router.navigate(['lista-cursos']);
  }

  adicionaCurso(form: NgForm){
    let serie: number = form.value.serie;
    let duracao: number = form.value.duracao;
    let linguagem: string = form.value.linguagem;

    let curso: Curso = {
      serie: serie,
      duracao: duracao,
      linguagem: linguagem
    }

    let caixa: Element = <Element>document.querySelector('#caixa');

    /*if(serie || duracao || linguagem == null){
      container.innerHTML += `<div class="alert alert-danger">Preencha todos os campos primeiro!</div>`;
    }else {
      this.cursoService.adicionaCurso(curso);
      container.innerHTML += `<div class="alert alert-success">Mensagem adicionada com sucesso!</div>`;
    }*/

    if(serie == null || serie < 1) {
      caixa.innerHTML = `<div class="alert alert-danger">Digite uma serie valida!</div>`;
    }
    else if(duracao == null || duracao < 1) {
      caixa.innerHTML = `<div class="alert alert-danger">Digite uma duração valida!</div>`;
    }
    else if(linguagem.length == 0) {
      caixa.innerHTML = `<div class="alert alert-danger">Digite uma tecnologia valida!</div>`;
    }
    else {
      this.cursoService.adicionaCurso(curso);
      caixa.innerHTML = `<div class="alert alert-success">Curso adicionado com sucesso!</div>`;
    }
  }
}
