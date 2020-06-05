import { NgModule } from '@angular/core';
import { SafePipe } from './pipes/safe.pipe';
import { JoniksSharedLibsModule } from './shared-libs.module';

@NgModule({
  imports: [JoniksSharedLibsModule],
  declarations: [],
  exports: [
    JoniksSharedLibsModule
  ]
})
export class JoniksCommonComponentsModule { }
