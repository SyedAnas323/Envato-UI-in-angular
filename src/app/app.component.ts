import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderFileComponent } from './components/header-file/header-file.component';
import { TextComponent } from './components/text/text.component';
import { CardComponent } from './components/card/card.component';
import { Text02Component } from './components/text02/text02.component';
import { SecCardComponent } from './components/sec-card/sec-card.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderFileComponent,TextComponent,CardComponent,Text02Component,SecCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Envato-UI';
}
