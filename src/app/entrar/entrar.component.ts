import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  private auth: AuthService
  private router: Router

  userLogin: UserLogin = new UserLogin()

  constructor() { }

  ngOnInit(): void {
  }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin)=>{
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.id = this.userLogin.id
      environment.foto = this.userLogin.foto
      this.router.navigate(['/inicio'])

    }, erro =>{
        if(erro.status== 401){
          alert('Usuário ou senha Incorretos!')
        }
    })
}
}
