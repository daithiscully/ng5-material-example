import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  sampleText: 'Lorem ipsum asdie';
  theme = 'my-theme';

  ngOnInit(): void {
  }

  updateTheme(theme: string) {
    this.theme = theme;
  }
}
