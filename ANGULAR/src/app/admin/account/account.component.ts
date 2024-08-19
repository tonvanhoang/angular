import { Component, OnInit } from '@angular/core';
import { NavleftadminComponent } from '../navleftadmin/navleftadmin.component';
import { NavtopadminComponent } from '../navtopadmin/navtopadmin.component';
import { modelsaccount } from '../../datamodels/modelsaccount';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { tick } from '@angular/core/testing';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-account',
  standalone: true,
  imports: [NavleftadminComponent,NavtopadminComponent,CommonModule,RouterLink],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit{
  accounts:any;
  constructor(private http:HttpClient){}
  ngOnInit(): void {
   this.getallaccount()
  }
  getallaccount(){
    const url = 'http://localhost:3000/account/allaccount';
    this.http.get<modelsaccount>(url).subscribe((data:modelsaccount)=>{
      console.log('show thành công',data);
      this.accounts=data;
    })
  };
  deleteaccount(id:string){
    const url = "http://localhost:3000/account/delete/" + id;
    this.http.delete<modelsaccount>(url).subscribe((dele)=>{
      console.log('delete thành công', dele);
      this.getallaccount()
      
    })
  }
}
