import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  usuarioLogin : UsuarioLogin = new UsuarioLogin

  constructor(
    private authService : AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.authService.entrar(this.usuarioLogin).subscribe((resp:UsuarioLogin) =>{ //Para transformar em JSon
      this.usuarioLogin = resp

      environment.token=this.usuarioLogin.token
      environment.nome=this.usuarioLogin.nome
      environment.foto=this.usuarioLogin.foto
      environment.id=this.usuarioLogin.id

      this.router.navigate(['/inicio'])
    }, erro => {
      if(erro.status == 500){
        alert('Usuário ou senha incorreta')
      }
    })
  }
}
