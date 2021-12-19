import { Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LodoaTomasPorfilio';
  objectKeys = Object.keys;
  navlist: any={
    home:'Home',
    about:'AboutMe',
    skills:'Skills',
    projects:'Projects',
    contact:'ContactMe',
  };

  @ViewChildren('asList') list?: QueryList<ElementRef> ;

  constructor(private render2: Renderer2) {
    
  }

  ngAfterViewInit() {
    this.list?.toArray()[0].nativeElement.classList.add('active');
  }
  
  change(i:any){
    const elementList= this.list?.toArray()[i].nativeElement;
    this.list?.forEach(element => {
      this.render2.removeClass(element.nativeElement, 'active');
    });
    this.render2.addClass(elementList,'active');
  }
}
