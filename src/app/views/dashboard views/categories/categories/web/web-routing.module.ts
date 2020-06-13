import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from './web/web.component';
import { ApplicationComponent } from './application/application.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { CompetitiveComponent } from './competitive/competitive.component';
import { DataScienceComponent } from './data-science/data-science.component';
import { MachineComponent } from './machine/machine.component';
import { OpenSourceComponent } from './open-source/open-source.component';


const routes: Routes = [
{
  path:'web',
  component:WebComponent
},
{
  path:'application development',
  component:ApplicationComponent
},
{
  path:'Miscellaneous fields',
  component:MiscellaneousComponent
},{
  path:'Competitive programming',
  component:CompetitiveComponent
},
{
  path:'Data science',
  component:DataScienceComponent
},
{
  path:'Machine learning',
  component:MachineComponent
},
{
  path:'Open source',
  component:OpenSourceComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
