import {
  animate,
  AnimationBuilder,
  AnimationFactory,
  AnimationPlayer,
  style,
} from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  HostListener,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import { CarouselItemDirective } from '../directivas/carousel-item.directive';
import { CarouselItemElementDirective } from '../directivas/carousel-item-element.directive';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'carousel',
  exportAs: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @ContentChildren(CarouselItemDirective)
  items!: QueryList<CarouselItemDirective>;

  @ViewChildren(CarouselItemElementDirective, { read: ElementRef })
  private itemsElements!: QueryList<ElementRef>;

  @ViewChild('carousel') private carousel!: ElementRef;
  @Input() timing = '0.5s ease-in-out';
  @Input() showControls = true;
  private player!: AnimationPlayer;
  private itemHeight!: number;
  private currentSlide = 0;
  carouselWrapperStyle = {};

  constructor(private builder: AnimationBuilder) { }

  private buildAnimation(offset:any, time: any) {
    return this.builder.build([
      animate(time == null ? this.timing : 0, style({ transform: `translateY(-${offset}px)` }))
    ]);
  }

  /**
   * Progresses the carousel forward by 1 slide.
   */
  next() {
    if (this.currentSlide + 1 == this.items.length) {
      let arr = this.items.toArray();
      let first:any = arr.shift();
      arr = arr.concat([first]);
      this.items.reset(arr);
      this.currentSlide--;
      this.transitionCarousel(0);
    }
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
    this.transitionCarousel(null);
  }

  /**
   * Regresses the carousel backwards by 1 slide.
   */
  prev() {
    // if (this.currentSlide === 0) return;
    if (this.currentSlide  == 0) {
      let arr:any = this.items.toArray();
      let last = arr.pop();
      arr = [last].concat(arr);
      this.items.reset(arr);
      this.currentSlide++;
      this.transitionCarousel(0);
    }

    this.currentSlide =
      (this.currentSlide - 1 + this.items.length) % this.items.length;
    this.transitionCarousel(null);
  }

  /* ngAfterViewInit() {
    this.reSizeCarousel();
  } */

  // /**
  //  * Listens for changes to the viewport size and triggers a re-sizing of the carousel.
  //  */
  // @HostListener('window:resize', ['$event'])
  // onResize(event:any) {
  //   this.reSizeCarousel();
  // }

  /**
   * Re-sizes the carousel container and triggers `this.transitionCarousel()` to reset the childrens' positions.
   *
   * For use on initial load, and when changing viewport size.
   */
  reSizeCarousel(): void {
    // re-size the container
    this.itemHeight = this.itemsElements.first.nativeElement.getBoundingClientRect().height;
    this.carouselWrapperStyle = {
      height: `${this.itemHeight}px`,
    };

    // trigger a fresh transition to the current slide to reset the position of the children
    this.transitionCarousel(null);
  }

  /**
   * Animates the carousel to the currently selected slide.
   *
   * **You must set `this.currentSlide` before calling this method, or it will have no effect.**
   */
  transitionCarousel(time: any) {
    const offset = this.currentSlide * 500;
    const myAnimation: AnimationFactory = this.buildAnimation(offset, time);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }
}

