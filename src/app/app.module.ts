import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JoniksAppRoutingModule } from './app-routing.module';
import { JoniksHomeModule } from './home/home.module';
import { FooterComponent } from './layouts/footer/footer.component';
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { JoniksSharedModule } from './shared/shared.module';
import { JoniksCoreModule } from './core/core.module';

@NgModule({
  declarations: [MainComponent, NavbarComponent, FooterComponent],
  imports: [BrowserModule, JoniksCoreModule, JoniksAppRoutingModule, JoniksSharedModule, JoniksHomeModule],
  providers: [],
  bootstrap: [MainComponent],
})
export class AppModule { }
