import { Component, OnInit } from '@angular/core';
import { NavleftadminComponent } from '../navleftadmin/navleftadmin.component';
import { NavtopadminComponent } from '../navtopadmin/navtopadmin.component';
import { HttpClient } from '@angular/common/http';
import { modelsproduct } from '../../datamodels/modelsproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { CATE } from '../../datamodels/modelscategory';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-productadmin',
  standalone: true,
  imports: [NavleftadminComponent,NavtopadminComponent,CommonModule,FormsModule,RouterLink],
  templateUrl: './productadmin.component.html',
  styleUrl: './productadmin.component.css'
})
export class ProductadminComponent implements OnInit{
  ngOnInit(){
    this.getallproductadmin()
  }
  constructor(private http:HttpClient){}
  products:any;
  getallproductadmin(){
    const url = 'http://localhost:3000/product/allproduct';
    this.http.get<modelsproduct>(url).subscribe((data:modelsproduct)=>{
      console.log('show sản phẩm admin thành công', data);
      this.products = data;
    })
  }
  deleteproduct(id:string){
    const url = "http://localhost:3000/product/deleteproduct/" + id;
    this.http.delete<modelsproduct>(url).subscribe((dele)=>{
      console.log('delete thành công',dele);
      this.getallproductadmin()
    })
  };
}
