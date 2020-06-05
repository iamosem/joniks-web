import { AfterViewChecked, Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'jn-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['navbar.scss']
})
export class NavbarComponent implements OnInit, AfterViewChecked {
  // languages: any[];
  // swaggerEnabled: boolean;
  // version: string;

  isSearching = false;
  searchForm = this.fb.group({
    searchKey: []
  });

  constructor(
    private elmRef: ElementRef,
    private renderer: Renderer2,
    private fb: FormBuilder
    //   private loginService: LoginService,
    //   private languageService: JhiLanguageService,
    //   private languageHelper: JhiLanguageHelper,
    //   private sessionStorage: SessionStorageService,
    //   private accountService: AccountService,
    //   private profileService: ProfileService,
    //   private router: Router
  ) {
    //   this.version = VERSION ? (VERSION.toLowerCase().startsWith('v') ? VERSION : 'v' + VERSION) : '';
    //   this.isNavbarCollapsed = true;
  }

  ngOnInit() {
    // this.languages = this.languageHelper.getAll();

    // this.profileService.getProfileInfo().subscribe(profileInfo => {
    //   this.inProduction = profileInfo.inProduction;
    //   this.swaggerEnabled = profileInfo.swaggerEnabled;
    // });
  }

  ngAfterViewChecked(): void {
    this.repositionActiveLinkIndicator();
  }

  @HostListener('window:resize')
  onResize() {
    this.repositionActiveLinkIndicator();
  }

  repositionActiveLinkIndicator() {
    const activeLink = this.elmRef.nativeElement.querySelector('.jn-nav .list-inline .active-link');
    if (activeLink) {
      const indicator = this.elmRef.nativeElement.querySelector('.jn-nav .active-link-indicator');
      if (indicator) {
        this.renderer.setStyle(indicator, 'visibility', 'visible');
        this.renderer.setStyle(indicator, 'left', `${activeLink.offsetLeft}px`);
        this.renderer.setStyle(indicator, 'width', `${activeLink.offsetWidth}px`);
      }
    }
  }

  // changeLanguage(languageKey: string) {
  //   this.sessionStorage.store('locale', languageKey);
  //   this.languageService.changeLanguage(languageKey);
  // }

  // collapseNavbar() {
  //   this.isNavbarCollapsed = true;
  // }

  // isAuthenticated() {
  //   return this.accountService.isAuthenticated();
  // }

  // login() {
  //   this.loginService.login();
  // }

  logout() {
    console.error('@@@ logout invoked');
  }

  // toggleNavbar() {
  //   this.isNavbarCollapsed = !this.isNavbarCollapsed;
  // }

  // getImageUrl() {
  //   return this.isAuthenticated() ? this.accountService.getImageUrl() : null;
  // }

  performSearch() {
    const searchKey = this.searchForm.get(['searchKey']).value;
    this.isSearching = true;
    this.searchForm.reset();
    this.isSearching = false;
  }
}
