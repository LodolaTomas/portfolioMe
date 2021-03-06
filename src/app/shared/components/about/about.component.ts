import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <section class="about" id="about">
  <h2 class="about__title">About me</h2>
  <div class="about__content">
    <div class="about__column-left">
      <img
        src=""
        alt="aca pondria una foto, !SI TAN SOLO TUVIERA UNA!"
        class="about__column-left-img"
      />
    </div>
    <div class="about__column-right">
      <div class="about__column-right-content">
        <p>
          Hello, my name is Tomás and I'm a
          <span class="about__column-right-title">Full Stack Developer</span>
        </p>
        <p>
          I started in the world of development when I began my technical degree
          at UTN two years ago and since then I am excited and motivated to know
          every day a little more, to have every day more tools.<br />
          I have had real work experience making websites as a Freelancer (where
          I have learned optimization, best practices, SEO and positioning
          according to Google) and experience in teams doing faculty projects
          and courses, which I do to deepen my knowledge. <br />
          I consider that as well as developing; communicating, listening and
          working in teams are skills that are trained daily and I love that. I
          am very happy to be part of the IT world and I look forward to
          collaborate with everything I learned this time and keep learning
          every day.
        </p>
        <div class="about__btns">
          <a pageScroll [pageScrollDuration]="500" href="#contact" class="button">Hire me</a>
          <a target="_blank" href="../../../../assets/cv-tomas-lodola.pdf" download rel="noopener noreferr" class="button">Get Resume</a>
        </div>
      </div>
    </div>
  </div>
</section>
`,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent{
}
