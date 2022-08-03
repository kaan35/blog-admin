import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  showNavbarModal: boolean = false;

  toggleNavBarModal() {
    this.showNavbarModal = !this.showNavbarModal;
  }

  constructor() {}

  ngOnInit(): void {}
}
