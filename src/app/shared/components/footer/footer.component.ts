import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  intagramLink = 'https://www.instagram.com/tomaslodola/';
  linkedinLink = 'https://www.linkedin.com/in/tomas-l-b76423173/';
  constructor() { }

  ngOnInit(): void {
  }

}
