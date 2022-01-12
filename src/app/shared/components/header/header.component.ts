import {
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <nav class="container flex flex-jc-sb flex-ai-c" id="navbar">
        <div class="header__logo">
          <p>Portfo<span>lio.</span></p>
        </div>
        <div
          #hamburger
          class="header__burger hide-for-desktop"
          (click)="openMenu()"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="header__links hide-for-mobile">
          <ng-container *ngFor="let key of objectKeys(navlist); index as i">
            <a
              #asList
              pageScroll
              [pageScrollDuration]="500"
              (click)="change(i)"
              href="#{{ key }}"
              >{{ navlist[key] }}</a
            >
          </ng-container>
        </div>
      </nav>
      <div #headerMenu class="header__menu display-none">
        <ng-container *ngFor="let key of objectKeys(navlist); index as i">
          <a
            #asList
            pageScroll
            [pageScrollDuration]="500"
            (click)="change(i)"
            href="#{{ key }}"
            >{{ navlist[key] }}</a
          >
        </ng-container>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChildren('asList')
  public list!: QueryList<ElementRef>;

  @ViewChild('hamburger')
  public hamburger!: ElementRef;

  @ViewChild('headerMenu')
  public headerMenu!: ElementRef;

  constructor(private render2: Renderer2) {}

  objectKeys = Object.keys;
  navlist: any = {
    home: 'Home',
    about: 'AboutMe',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'ContactMe',
  };

  change(i: number) {
    const elementList = this.list.toArray()[i].nativeElement;
    this.list.forEach((element) => {
      this.render2.removeClass(element.nativeElement, 'active');
    });
    this.render2.addClass(elementList, 'active');
    this.render2.removeClass(this.hamburger.nativeElement, 'menu-open');
    this.render2.addClass(this.headerMenu.nativeElement, 'display-none');
  }

  openMenu() {
    if (this.hamburger.nativeElement.classList.contains('menu-open')) {
      this.render2.removeClass(this.hamburger.nativeElement, 'menu-open');
      this.render2.addClass(this.headerMenu.nativeElement, 'display-none');
    } else {
      this.render2.addClass(this.hamburger.nativeElement, 'menu-open');
      this.render2.removeClass(this.headerMenu.nativeElement, 'display-none');
    }
  }
}
