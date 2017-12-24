import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatAutocompleteModule,MatCheckboxModule,MatButtonModule,MatInputModule,MatRadioModule,MatFormFieldModule,MatSelectModule,
  MatSliderModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSliderModule,
  ],
  exports:[
    MatAutocompleteModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSliderModule,
  ],
  declarations: []
})
export class AngularMaterialModule { }
