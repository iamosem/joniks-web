import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JoniksSharedModule } from '../shared/shared.module';
import { BLENDED_ROUTES } from './blended.route';
import { BlendedComponent } from './blended.component';

@NgModule({
  imports: [JoniksSharedModule, RouterModule.forChild([...BLENDED_ROUTES])],
  declarations: [BlendedComponent]
})
export class JoniksBlendedModule { }
