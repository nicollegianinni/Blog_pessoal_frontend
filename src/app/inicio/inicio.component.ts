import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { Postagem } from '../model/Postagem';

import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  postagem: Postagem = new Postagem()
  tema: Tema = new Tema()
  user: User = new User()

  listaTemas: Tema[]
  listaPostagem: Postagem[]

  idTema: number

  idUser = environment.id

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(){

    window.scroll(0,0)

    if(environment.token == ''){
       alert('Sua sessão expirou, faça o login novamente')
      this.router.navigate(['/entrar'])
    }
  }
}
