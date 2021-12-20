import {
  animate,
  AnimationBuilder,
  AnimationFactory,
  AnimationPlayer,
  style,
} from '@angular/animations';
import {
  Component,
  ElementRef,
  HostListener,
  Input,
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

  items = [{ title: 'Front-end' }, { title: 'Back-end' }, { title: 'Other-skills' }];


  constructor(private render2: Renderer2, private builder: AnimationBuilder) {}

  ngAfterViewInit() {
    this.list.toArray()[0].nativeElement.classList.add('active');
    this.listItem.toArray()[0].nativeElement.classList.add('active');
  }

  change(i: number) {
    const elementList = this.list.toArray()[i].nativeElement;
    this.list.forEach((element) => {
      this.render2.removeClass(element.nativeElement, 'active');
    });
    this.render2.addClass(elementList, 'active');
    if(i === 0){
      document.getElementById('home')!.scrollIntoView({behavior: 'smooth'});
    }
    if(i === 1){
      this.unsetAllOptions(i);
    }
    if(i === 2){
      this.unsetAllOptions(i);
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
