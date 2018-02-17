import {Component, OnInit} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  theme = 'custom-light-theme';

  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add(this.theme);
  }

  ngOnInit(): void {
  }

  updateTheme(theme: string) {
    this.theme = theme;
  }
}
