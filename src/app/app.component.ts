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

  @ViewChildren('myskillSections')
  public myskillSections!: QueryList<ElementRef<HTMLElement>>;

  @ViewChild('myskillContent') private carousel!: ElementRef;

  @Input() timing = '250ms ease-in';
  private player!: AnimationPlayer;
  private itemWidth!: number;
  private currentSlide = 0;
  carouselWrapperStyle = {};

  constructor(private render2: Renderer2, private builder: AnimationBuilder) {}

  ngAfterViewInit() {
    this.list.toArray()[0].nativeElement.classList.add('active');
    this.listItem.toArray()[0].nativeElement.classList.add('active');
    this.reSizeCarousel();
  }

  change(i: number) {
    const elementList = this.list.toArray()[i].nativeElement;
    this.list.forEach((element) => {
      this.render2.removeClass(element.nativeElement, 'active');
    });
    this.render2.addClass(elementList, 'active');
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

  prev() {
    if (this.currentSlide == 0) {
      let arr: any = this.myskillSections.toArray();
      let last = arr.pop();
      arr = [last].concat(arr);
      this.myskillSections.reset(arr);
      this.currentSlide++;
      this.transitionCarousel(0);
    }
    this.currentSlide = (this.currentSlide - 1 + parseInt(this.myskillSections.toArray().length.toString())) % parseInt(this.myskillSections.toArray().length.toString());
    this.transitionCarousel(null);
  }

  next() {
    if (this.currentSlide + 1 == this.myskillSections.toArray().length) {
      let arr = this.myskillSections.toArray();
      let first: any = arr.shift();
      arr = arr.concat([first]);
      this.myskillSections.reset(arr);
      this.currentSlide--;
      this.transitionCarousel(0);
    }
    this.currentSlide = (this.currentSlide + 1 + parseInt(this.myskillSections.toArray().length.toString())) % parseInt(this.myskillSections.toArray().length.toString());
    this.transitionCarousel(null);
  }

  private buildAnimation(offset: any, time: any) {
    return this.builder.build([
      animate(
        time == null ? this.timing : 0,
        style({ transform: `translateY(-${offset}px)` })
      ),
    ]);
  }

  /**
   * Animates the carousel to the currently selected slide.
   *
   * **You must set `this.currentSlide` before calling this method, or it will have no effect.**
   */
  transitionCarousel(time: any) {
    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset, time);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  /**
   * Listens for changes to the viewport size and triggers a re-sizing of the carousel.
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.reSizeCarousel();
  }

  /**
   * Re-sizes the carousel container and triggers `this.transitionCarousel()` to reset the childrens' positions.
   *
   * For use on initial load, and when changing viewport size.
   */
  reSizeCarousel(): void {
    // re-size the container
    this.itemWidth =
      this.myskillSections.first.nativeElement.getBoundingClientRect().height;
    this.carouselWrapperStyle = {
      height: `${this.itemWidth}px`,
    };

    // trigger a fresh transition to the current slide to reset the position of the children
    this.transitionCarousel(null);
  }
}
