import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  template: `<h1>HOLA MUNDO DESDE COMPONENTE</h1>
  <app-user></app-user>`,
  styles: 'h1{ color: #09f}'
})
export class AppComponent {
  city = 'Barcelona';
}





