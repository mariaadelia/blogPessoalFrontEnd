import { Router, ActivatedRoute } from '@angular/router';
import { PostagemService } from './../../service/postagem.service';
import { Postagem } from './../../model/Postagem';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-delete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css']
})
export class PostagemDeleteComponent implements OnInit {

  postagem : Postagem = new Postagem
  idPost : number

  constructor(
    private postagemService : PostagemService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if(environment.token == ''){
      alert('Sua sessão expirou, faça o login novamente')
      this.router.navigate(['/login'])
    }

    this.idPost = this.route.snapshot.params['id']
    this.findByIdPostagem(this.idPost)
  }

  findByIdPostagem(id : number){
    this.postagemService.getByIdPostagem(id).subscribe((resp : Postagem) => {
      this.postagem = resp
    })
  }

  apagar(){
    this.postagemService.deletePostagem(this.idPost).subscribe(()=>{
      alert('Postagem apagada com sucesso')
      this.router.navigate(['/inicio'])
    })
  }

}
