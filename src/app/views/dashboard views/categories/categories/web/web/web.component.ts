import { Component, OnInit, ViewChild  } from '@angular/core';
import { SubCategory } from 'src/app/shared/classes/sub-category';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.sass']
})
export class WebComponent implements OnInit {
  // displayedColumns: string[] = [ 'position','name'];

  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private _CategoriesService:CategoriesService) { }
// web_model:SubCategory[]=[]

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;

    // this._CategoriesService.listweb().subscribe(
    //   data=>{
    //     console.log(data)
    //     this.web_model= data as SubCategory[]
    //     this.dataSource = new MatTableDataSource(data as SubCategory[] );
    //   },
    //   error=>{
    //     console.log(error)
    //   }
    // )
  }
  // dataSource = new MatTableDataSource<SubCategory>(this.web_model);

}
