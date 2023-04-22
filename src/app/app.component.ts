import { Component } from '@angular/core';
import { HobbiesInterface, PersonaClass, SportsInterface, UsuarioInterface } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  nombre = 'Analía';
  usuario!: UsuarioInterface<SportsInterface, any>;
  usuario2!: UsuarioInterface<any, any>;



  persona: PersonaClass<SportsInterface, HobbiesInterface> = new PersonaClass();
  constructor() {
    this.usuario.name = this.nombre;
  }
}
