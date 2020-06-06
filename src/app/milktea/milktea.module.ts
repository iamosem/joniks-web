import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JoniksSharedModule } from '../shared/shared.module';
import { MILKTEA_ROUTES } from './milktea.route';
import { MilkteaComponent } from './milktea.component';

@NgModule({
  imports: [JoniksSharedModule, RouterModule.forChild([...MILKTEA_ROUTES])],
  declarations: [MilkteaComponent]
})
export class JoniksMilkteaModule { }
