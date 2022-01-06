import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="home" id="home">
    <div class="home__content">
      <div class="text-1">Hello, my name is</div>
      <div class="text-2">Lodola Tomás</div>
      <div class="text-3">
        <p>And I'm a</p>
        <span class="typing">Full Stack Developer</span>
      </div>
      <div class="home__btns">
        <a href="#" class="button">Hire me</a>
        <a href="#" class="button">Get Resume</a>
      </div>
    </div>
  </section>`,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
