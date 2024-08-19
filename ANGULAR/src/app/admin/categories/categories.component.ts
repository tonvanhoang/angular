import { Component, OnInit } from '@angular/core';
import { CATE } from '../../datamodels/modelscategory';
import { NavtopadminComponent } from '../navtopadmin/navtopadmin.component';
import { NavleftadminComponent } from '../navleftadmin/navleftadmin.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NavtopadminComponent,NavleftadminComponent,CommonModule,FormsModule,RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
  constructor(private http:HttpClient){}
  categories:any;
  ngOnInit(): void {
    this.getallcategories()
  }
  getallcategories(){
    const url = "http://localhost:3000/category/allcate";
    this.http.get<CATE>(url).subscribe((data:CATE)=>{
      console.log('show all categories', data);
      this.categories = data;
    })
  }
  deletecategory(id:string){
    const url = "http://localhost:3000/category/deletecate/"+id;
    this.http.delete<CATE>(url).subscribe((dele)=>{
      console.log('xóa thành công',dele);
      this.getallcategories()
    })
  }
}
