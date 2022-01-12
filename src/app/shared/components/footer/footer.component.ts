import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: ` <hr />
    <footer class="footer__container container" id="footer">
      <div class="footer__rights">
        <p>© 2022 Lodola Tomas - All Rights Reserved</p>
      </div>
      <div class="footer__social">
        <a href="{{ intagramLink }}" target="_blank">
          <img
            src="../../../../assets/icons/instagram.svg"
            class="footer__social-img"
            alt="instagram Tomas Lodola"
          />
        </a>
        <a href="{{ linkedinLink }}" target="_blank">
          <img
            src="../../../../assets/icons/linkedin.svg"
            class="footer__social-img"
            alt="facebook Tomas Lodola"
          />
        </a>
      </div>
    </footer>`,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent{
  intagramLink = 'https://www.instagram.com/tomaslodola/';
  linkedinLink = 'https://www.linkedin.com/in/tomas-l-b76423173/';
}
