import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CATE } from '../../datamodels/modelscategory';
@Component({
  selector: 'app-product-bycategory',
  standalone: true,
  imports: [NavComponent,CommonModule,RouterLink],
  templateUrl: './product-bycategory.component.html',
  styleUrl: './product-bycategory.component.css'
})
export class ProductBycategoryComponent implements OnInit{
  constructor(private http:HttpClient,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const probycate = params.get('id')
      if(probycate){
        this.getallproductbycate(probycate)
        this.getcatebyid(probycate)
      }
    });
    this.getallcategory()
  }
  pro:any;
  getallproductbycate(id:string){
    const url = "http://localhost:3000/product/productBYcate/" +id;
    this.http.get<any>(url).subscribe((data:any)=>{
      console.log('sp',data);
      this.pro=data
    })
  }
  ca:any;
  getcatebyid(id:string){
    const url = "http://localhost:3000/category/catebyid/"+id;
    this.http.get<any>(url).subscribe((data:any)=>{
      console.log("show cate",data);
      this.ca = data
    })
  }
  categories:CATE[]=[];
  getallcategory(){
    const url="http://localhost:3000/category/allcate";
    this.http.get<CATE[]>(url).subscribe((data:CATE[])=>{
      console.log('show all cate',data);
      this.categories = data;
    })
   
  }
}
