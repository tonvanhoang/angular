import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { modelsproduct } from '../../datamodels/modelsproduct';
import { HttpClient } from '@angular/common/http';
import { CATE } from '../../datamodels/modelscategory';
import { NavleftadminComponent } from '../navleftadmin/navleftadmin.component';
import { NavtopadminComponent } from '../navtopadmin/navtopadmin.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-formaddproduct',
  standalone: true,
  imports: [CommonModule,NavleftadminComponent,NavtopadminComponent,FormsModule],
  templateUrl: './formaddproduct.component.html',
  styleUrl: './formaddproduct.component.css'
})
export class FormaddproductComponent implements OnInit{
  ngOnInit(): void {
    this.getallcategories()
  }
  constructor(private http:HttpClient){}
  product:modelsproduct={
    _id:null,
    name:'',
    price:0,
    quantity:0,
    id_cate:'',
    img:'',
    short_description:'',
    description:''

  }
  addproduct(){
    const url = 'http://localhost:3000/product/addproduct';
    this.http.post<modelsproduct>(url,this.product).subscribe((add)=>{
    console.log('thêm thành công',add);
    alert('Add product successfully')
    window.location.href="showproductadmin"
    })
  };
  categories:CATE[]=[];
  getallcategories(){
    const url = "http://localhost:3000/category/allcate";
    this.http.get<CATE[]>(url).subscribe((data:CATE[])=>{
      console.log('show all categories', data);
      this.categories = data;
    })
  }
}
