import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATE } from '../../datamodels/modelscategory';
import { NavleftadminComponent } from '../navleftadmin/navleftadmin.component';
import { NavtopadminComponent } from '../navtopadmin/navtopadmin.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-formeditcategory',
  standalone: true,
  imports: [NavleftadminComponent,NavtopadminComponent,CommonModule,FormsModule],
  templateUrl: './formeditcategory.component.html',
  styleUrl: './formeditcategory.component.css'
})
export class FormeditcategoryComponent implements OnInit{
  constructor (private http:HttpClient, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const cateid = params.get('id');
      if(cateid){
        this.formedit(cateid)
      }
    })
  }
  id:string=""
  cate:CATE={
    _id:'',
    name:''
  }
  formedit(id:string){
    const url = `http://localhost:3000/category/catebyid/` + id;
    this.http.get<any>(url).subscribe((data)=>{
      console.log('show thành công',data);
      this.id=id
      this.cate = data
      console.log('show cate',this.cate);
      console.log("ca",this.cate.name)
    })
  }
  edit(id:string): void {
    const url = 'http://localhost:3000/category/editbyid/'+ id;
    this.http.put<CATE>(url, this.cate).subscribe({
      next: (edi) => {
        console.log('sửa thành công:', edi);
        alert('Edit product successfully');
        window.location.href="showcategoryadmin"
      },
      error: (err) => {
        console.error('lỗi:', err);
        alert('lỗi.');
      }
    });
  }
}