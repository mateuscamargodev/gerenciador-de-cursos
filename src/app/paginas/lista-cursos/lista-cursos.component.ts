import { Observable } from 'rxjs';
import { CursoServiceService } from './../../services/curso-service.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  constructor(private cursoServiceService: CursoServiceService) {}

  ngOnInit(): void {}

  public cursos = this.listaCursos();

  listaCursos() {
    return this.cursoServiceService.listaCursos();
  }

  deletaCurso(id: number){
    this.cursoServiceService.deletaCurso(id);
    this.cursos = this.listaCursos();
  }
}
