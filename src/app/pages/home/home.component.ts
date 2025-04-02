import { Component } from '@angular/core';
import { IntroTextComponent } from '../../components/intro-text/intro-text.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ IntroTextComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
