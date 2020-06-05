import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  exports: [
    FormsModule,
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    SafePipe
  ]
})
export class JoniksSharedLibsModule { }
