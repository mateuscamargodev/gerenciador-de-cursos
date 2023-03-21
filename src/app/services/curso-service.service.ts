import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../interfaces/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoServiceService {

  constructor(private http: HttpClient) {}

  readonly apiURL: string = 'http://localhost:3000';
  //public cursos: Object[] = [];

  listaCursos(): Observable<any>{
    return this.http.get(this.apiURL + '/cursos');
  }

  adicionaCurso(curso: Curso){
    this.http.post(this.apiURL + '/cursos', curso).subscribe(resultado => console.log(resultado));
  }

  deletaCurso(){
    //this.cursos.splice(4);
    this.http.delete(this.apiURL + '/cursos/11').subscribe(resultado => console.log(resultado));
  }
}

