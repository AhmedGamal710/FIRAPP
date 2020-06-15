import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'

import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web/web.component'
import { ApplicationComponent } from './application/application.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { CompetitiveComponent } from './competitive/competitive.component';
import { DataScienceComponent } from './data-science/data-science.component';
import { MachineComponent } from './machine/machine.component';
import { OpenSourceComponent } from './open-source/open-source.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {  FormsModule } from '@angular/forms';


@NgModule({
  declarations: [WebComponent, ApplicationComponent, MiscellaneousComponent, CompetitiveComponent, DataScienceComponent, MachineComponent, OpenSourceComponent],
  imports: [
    CommonModule,
    WebRoutingModule,
    SharedModule,
    BrowserModule,
    FormsModule

  ]
})
export class WebModule { }
