import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario : Usuario = new Usuario
  confirmacaoSenha : string
  tipoUsuario: string

  constructor(
    private authService : AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmarSenha(event:any){
    this.confirmacaoSenha = event.target.value
  }

  tipoUser(event:any){
    this.tipoUsuario = event.target.value
  }

  cadastrar(){
    this.usuario.tipo=this.tipoUsuario
    //Validação de senha (para checar se está correto)
    if(this.usuario.senha != this.confirmacaoSenha){
      alert('As senhas estão incorretas')
    }
    else{
      this.authService.cadastrar(this.usuario).subscribe((resp:Usuario) =>{ //Para transformar em JSon
        this.usuario = resp
        this.router.navigate(['/login'])
        alert('Usuário cadastrado com sucesso!')
      })
    }
  }

}
