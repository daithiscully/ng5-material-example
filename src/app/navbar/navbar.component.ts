import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  link1ClickHandle() {
    console.log(`Link 1 clicked in the navbar`);
  }
  link2ClickHandle() {
    console.log(`Link 2 clicked in the navbar`);
  }
  link3ClickHandle() {
    console.log(`Link 3 clicked in the navbar`);
  }
}
