import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'jn-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  title = 'joniks-web';
  test = 'sample';

  ngOnInit(): void { }

  ngOnDestroy(): void { }

  isAuthenticated() {
    return true;
  }
}
