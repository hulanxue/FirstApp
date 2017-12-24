import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '../../shared';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';

import {ButtonModule} from 'primeng/primeng';
import{AngularMaterialModule}from '../../shared/modules/angular-material/angular-material.module'




@NgModule({
    imports: [CommonModule, BlankPageRoutingModule,ButtonModule,AngularMaterialModule,PageHeaderModule],
    declarations: [BlankPageComponent]
})
export class BlankPageModule {}
