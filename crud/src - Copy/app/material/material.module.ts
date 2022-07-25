import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


const materialComponents :any []= [
  MatToolbarModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule
]



@NgModule({
  
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule { }
