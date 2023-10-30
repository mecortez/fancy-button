import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fancy-button';
  sky = '';
  astro: boolean = false;

  toggleAstro() {
    this.astro = !this.astro;
  }
}
