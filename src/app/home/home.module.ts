import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JoniksSharedModule } from '../shared/shared.module';
import { HOME_ROUTE } from './home.route';

@NgModule({
  imports: [JoniksSharedModule, RouterModule.forChild([HOME_ROUTE])]
})
export class JoniksHomeModule { }
