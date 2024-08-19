import { Component, OnInit } from '@angular/core';
import { CATE } from '../../datamodels/modelscategory';
import { NavtopadminComponent } from '../navtopadmin/navtopadmin.component';
import { NavleftadminComponent } from '../navleftadmin/navleftadmin.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-formaddcategory',
  standalone: true,
  imports: [NavtopadminComponent,NavleftadminComponent,CommonModule,FormsModule],
  templateUrl: './formaddcategory.component.html',
  styleUrl: './formaddcategory.component.css'
})
export class FormaddcategoryComponent implements OnInit{
  ngOnInit(): void {
    
  }
  constructor(private http:HttpClient){}
  category:CATE={
    _id:'',
    name:''
  }
  addcategory(){
    const url = 'http://localhost:3000/category/addcate';
    this.http.post<CATE>(url,this.category).subscribe((add)=>{
      console.log('thêm thành công',add);
      window.location.href='showcategoryadmin';
      alert('add category successfully');
    })
  }
}
