import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input('theme') theme: string;
  @Output('themeChange') themeChange = new EventEmitter();
  @Input('sideNavOpen') sideNavOpen: boolean;
  @Output('sideNavChange') sideNavChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  link1ClickHandle() {
    console.log(`Link 1 clicked in the navbar`);
  }

  useTheme1() {
    this.theme = 'custom-light-theme';
    this.themeChange.emit('custom-light-theme');
  }
  useTheme2() {
    this.theme = 'custom-dark-theme';
    this.themeChange.emit('custom-dark-theme');
  }

  toggleSidenav() {
    this.sideNavOpen = !this.sideNavOpen;
    this.sideNavChange.emit(this.sideNavOpen);
  }
}
