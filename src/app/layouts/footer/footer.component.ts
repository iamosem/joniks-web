import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'jn-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  urlWhitelist = ['/profile', '/food-library'];

  constructor(private router: Router) { }

  checkIfWhitelisted() {
    return this.urlWhitelist.some(w => this.router.url.startsWith(w));
  }
}
