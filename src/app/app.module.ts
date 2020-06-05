import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { JoniksHomeModule } from './home/home.module';
import { MainComponent } from './layouts/main/main.component';
import { JoniksSharedModule } from './shared/shared.module';
import './vendor';

@NgModule({
  declarations: [MainComponent],
  imports: [BrowserModule, AppRoutingModule, JoniksSharedModule, JoniksHomeModule],
  providers: [],
  bootstrap: [MainComponent],
})
export class AppModule { }
