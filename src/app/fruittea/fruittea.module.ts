import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JoniksSharedModule } from '../shared/shared.module';
import { FRUITTEA_ROUTES } from './fruittea.route';
import { FruitteaComponent } from './fruittea.component';

@NgModule({
  imports: [JoniksSharedModule, RouterModule.forChild([...FRUITTEA_ROUTES])],
  declarations: [FruitteaComponent]
})
export class JoniksFruitteaModule { }
