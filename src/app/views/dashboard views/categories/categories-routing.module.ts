import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { WebComponent } from './categories/web/web/web.component';
import { WebRoutingModule } from './categories/web/web-routing.module';

const routes: Routes = [

  {
    path:'',
    component:CategoriesComponent,
    children:[
   
      { path: 'category', loadChildren: () => WebRoutingModule },
    


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
