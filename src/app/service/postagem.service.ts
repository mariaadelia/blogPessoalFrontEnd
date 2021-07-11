import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) { }
  
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagem() : Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://maria-adelia.herokuapp.com/postagem', this.token)
  }

  postPostagem(postagem:Postagem) : Observable <Postagem>{
    return this.http.post<Postagem>('https://maria-adelia.herokuapp.com/postagem', postagem, this.token)
  }
}
