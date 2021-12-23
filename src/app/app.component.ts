import { ViewportScroller } from '@angular/common';
import {
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'LodolaTomasPortfolio';
  objectKeys = Object.keys;
  navlist: any = {
    home: 'Home',
    about: 'AboutMe',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'ContactMe',
  };
  skillsList: any = ['Skills', 'Experience', 'Education'];

  @ViewChild('skillContent')
  public skillContent!: ElementRef;

  @ViewChildren('listItem')
  public listItem!: QueryList<ElementRef<HTMLLIElement>>;

  @ViewChildren('asList')
  public list!: QueryList<ElementRef>;

  items = [
    { title: 'Front-end', html: '../assets/images/html_logo.png', css: '../assets/images/css_logo.png', js: '../assets/images/js_logo.png', typescript: '../assets/images/ts_logo.png', angular:  '../assets/images/angular_logo.png', vue: '../assets/images/vue_logo.png' },
    { title: 'Back-end', php: '../assets/images/php_logo.png', laravel: '../assets/images/laravel_logo.png', python: '../assets/images/python_logo.png', node: '../assets/images/node_logo.png', mysql: '../assets/images/mysql_logo.png', firebase: '../assets/images/firebase_logo.png' },
    { title: 'Other-skills', bootstrap: '../assets/images/bootstrap_logo.png',docker:'../assets/images/docker_logo.png',linux:'../assets/images/linux_logo.png', git: '../assets/images/git_logo.png',ionic:'../assets/images/ionic_logo.png',ngrx:'../assets/images/ngrx_logo.svg',sass:'../assets/images/sass_logo.png', adobexd:'../assets/images/adobexd_logo.png' },
  ];

  constructor(private render2: Renderer2, private viewportScroller:ViewportScroller) {}

  /* ngAfterViewInit() {
    this.list.toArray()[0].nativeElement.classList.add('active');
    this.listItem.toArray()[0].nativeElement.classList.add('active');
  } */

  change(i: number,key:string) {
    const elementList = this.list.toArray()[i].nativeElement;
    this.list.forEach((element) => {
      this.render2.removeClass(element.nativeElement, 'active');
    });
    this.render2.addClass(elementList, 'active');
    if (key === 'home') {
      this.viewportScroller.scrollToAnchor(key);
    }
    if(key === 'about'){
      this.viewportScroller.scrollToAnchor(key);
    }
    if(key === 'skills'){
      this.viewportScroller.scrollToAnchor(key);
    }
    if(key === 'projects'){
      this.viewportScroller.scrollToAnchor(key);
    }
    if(key === 'contact'){
      this.viewportScroller.scrollToAnchor(key);
    }

  }
  unsetAllOptions(i: number) {
    const skillList = this.listItem.toArray()[i].nativeElement;
    this.listItem.forEach((element) => {
      this.render2.removeClass(element.nativeElement, 'active');
    });
    this.render2.addClass(skillList, 'active');

    let posicion = i;
    let operacion = posicion * -(100 / 3);
    this.render2.setStyle(
      this.skillContent.nativeElement,
      'transform',
      `translateX(${operacion}%)`
    );
  }
}
