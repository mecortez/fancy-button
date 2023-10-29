import { Component } from '@angular/core';

@Component({
  selector: 'app-fancy-button',
  templateUrl: './fancy-button.component.html',
  styleUrls: ['./fancy-button.component.scss'],
})
export class FancyButtonComponent {
  public astroSwitch: boolean = false;
  public astroSrc: string = 'sun';

  toggleAstro() {
    this.astroSwitch = !this.astroSwitch;
    this.astroSwitch ? (this.astroSrc = 'moon') : (this.astroSrc = 'sun');
  }
}
