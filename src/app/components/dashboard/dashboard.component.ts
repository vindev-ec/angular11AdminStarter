import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  innerWidth: any;
  activeUrl: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const self = this;

    // Toggle Click Function
    $('#menu-toggle').on('click', (e) => {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
    });

    // Tamaño pantalla
    this.innerWidth = window.innerWidth;

    // Ruta
    this.activeUrl = this.router.url.split('/')[1];
    this.router.events.subscribe((opt: NavigationStart) => {
      if (opt.navigationTrigger === 'imperative') {
        self.activeUrl = opt.url.split('/')[1];
      }
    });
  }
}
