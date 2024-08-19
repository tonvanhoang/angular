import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// import { modelsaccount } from '../../datamodels/modelsaccount';
@Component({
  selector: 'app-myorder',
  standalone: true,
  imports: [NavComponent,CommonModule],
  templateUrl: './myorder.component.html',
  styleUrl: './myorder.component.css'
})
export class MyorderComponent implements OnInit{
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.showallorder();
    const accountJson = localStorage.getItem('account');
    if (accountJson) {
      const acc = JSON.parse(accountJson);
      if (acc) {
         var id =acc._id
         this.showorder(id)
        //  this.showaccount(id)   
      }
    } 
  }
  orders:any;
  showallorder(){
    const url = "http://localhost:3000/order/all"
    this.http.get<any>(url).subscribe((data)=>{
      this.orders = data;
    })
  }
  order:any;
  showorder(id:string){
    const url = "http://localhost:3000/order/orderbyid/"+id;
    this.http.get<any>(url).subscribe((data)=>{
      this.order = data
      console.log('order của tôi',this.order);
    })
  }
  product:any;
  detailProduct(id: string) {
    const url = `http://localhost:3000/product/productByID/` + id;
    this.http.get<any>(url).subscribe((data: any) => {
      console.log('Show chi tiết sản phẩm thành công', data);
      this.product = data;
    });
  }
  // account:any;
  // showaccount(id:string){
  //   const url = "http://localhost:3000/account/accountbyid/"+id;
  //   this.http.get<any>(url).subscribe((data)=>{
  //     console.log('accountorder',data);
  //     this.account = data;
  //   })
  // }
}
