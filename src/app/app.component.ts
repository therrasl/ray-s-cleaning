import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import { MainPageComponent } from './core/pages/main-page/main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MainPageComponent,
    RouterOutlet,
    HeaderComponent,
    MainPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Rays-cleaning';
}
