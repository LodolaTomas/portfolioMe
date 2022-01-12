import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: ` 
  <app-header></app-header>
  <app-home></app-home>
  <app-about></app-about>
  <app-skills></app-skills>
  <app-projects></app-projects>
  <app-contact></app-contact>
  <app-footer></app-footer>
  <router-outlet></router-outlet>
    `,
})
export class AppComponent{
  title = 'LodolaTomasPortfolio';
}
