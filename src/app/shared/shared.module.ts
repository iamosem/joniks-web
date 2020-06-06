import { NgModule } from '@angular/core';
import { JoniksCommonComponentsModule } from './common-components.module';
import { JoniksSharedLibsModule } from './shared-libs.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [JoniksSharedLibsModule, JoniksCommonComponentsModule, TranslateModule],
  declarations: [],
  exports: [
    JoniksSharedLibsModule,
    JoniksCommonComponentsModule,
    TranslateModule
  ]
})
export class JoniksSharedModule { }
