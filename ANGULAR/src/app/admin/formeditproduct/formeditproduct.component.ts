import { Component, OnInit } from '@angular/core';
import { NavtopadminComponent } from '../navtopadmin/navtopadmin.component';
import { NavleftadminComponent } from '../navleftadmin/navleftadmin.component';
import { CommonModule } from '@angular/common';
import { modelsproduct } from '../../datamodels/modelsproduct';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CATE } from '../../datamodels/modelscategory';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-formeditproduct',
  standalone: true,
  imports: [NavtopadminComponent,NavleftadminComponent,CommonModule,FormsModule],
  templateUrl: './formeditproduct.component.html',
  styleUrl: './formeditproduct.component.css'
})
export class FormeditproductComponent implements OnInit{
  constructor(private http:HttpClient , private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const proid = params.get('id');
      if(proid){
        this.formedit(proid)
      }
    })
    this.getallcategories()
  }
  formedit(id:string){
    const url = "http://localhost:3000/product/productByID/"+id;
    this.http.get<any>(url).subscribe((data)=>{
      console.log('s');
      this.id=id
      this.pro=data
    })
  }
  id:string=""
  pro:modelsproduct={
    _id:'',
    name:'',
    price:0,
    quantity:0,
    id_cate:'',
    img:'',
    short_description:'',
    description:''
  }
  edit(id:string): void{
    const url ="http://localhost:3000/product/editpro/"+id;
    this.http.put<modelsproduct>(url,this.pro).subscribe((edi)=>{
      console.log('sửa thành công',edi);
      alert('Edit product successfully');
      window.location.href="showproductadmin"
    })
  }
  categories:any;
  getallcategories(){
    const url = "http://localhost:3000/category/allcate";
    this.http.get<any>(url).subscribe((data:any)=>{
      console.log('show all categories', data);
      this.categories = data;
    })
  }
}
