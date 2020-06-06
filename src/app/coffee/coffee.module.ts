import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JoniksSharedModule } from '../shared/shared.module';
import { COFFEE_ROUTES } from './coffee.route';
import { CoffeeComponent } from './coffee.component';

@NgModule({
  imports: [JoniksSharedModule, RouterModule.forChild([...COFFEE_ROUTES])],
  declarations: [CoffeeComponent]
})
export class JoniksCoffeModule { }
