import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  /*Get All*/
  getAllTema():Observable <Tema[]>{
    return this.http.get<Tema[]>('https://maria-adelia.herokuapp.com/tema',this.token)
  }

  /*Get By Id*/
  getByIdTema(id:number): Observable<Tema>{
    return this.http.get<Tema>(`https://maria-adelia.herokuapp.com/tema/${id}`, this.token)
  }

  /*Post*/
  postTema(tema:Tema):Observable <Tema>{
    return this.http.post<Tema>('https://maria-adelia.herokuapp.com/tema',tema,this.token)
  }

  /*Editar*/
  putTema(tema:Tema):Observable<Tema>{
    return this.http.put<Tema>('https://maria-adelia.herokuapp.com/tema', tema, this.token)
  }
  
  /*Deletar*/
  deleteTema(id:number){
    return this.http.delete(`https://maria-adelia.herokuapp.com/tema/${id}`, this.token)
  }
}