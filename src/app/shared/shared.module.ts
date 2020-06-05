import { NgModule } from '@angular/core';
import { JoniksCommonComponentsModule } from './common-components.module';
import { JoniksSharedLibsModule } from './shared-libs.module';

@NgModule({
  imports: [JoniksSharedLibsModule, JoniksCommonComponentsModule],
  declarations: [],
  exports: [
    JoniksSharedLibsModule,
    JoniksCommonComponentsModule
  ]
})
export class JoniksSharedModule { }
