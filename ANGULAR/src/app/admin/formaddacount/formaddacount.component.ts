import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavtopadminComponent } from '../navtopadmin/navtopadmin.component';
import { NavleftadminComponent } from '../navleftadmin/navleftadmin.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { modelsaccount } from '../../datamodels/modelsaccount';
@Component({
  selector: 'app-formaddacount',
  standalone: true,
  imports: [CommonModule,NavtopadminComponent,NavleftadminComponent,FormsModule],
  templateUrl: './formaddacount.component.html',
  styleUrl: './formaddacount.component.css'
})
export class FormaddacountComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(private http:HttpClient){}
  account:modelsaccount={
    _id:'',
    name:'',
    role:'',
    password:'',
    email:'',
    avata:'https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg'
  };
  addaccount(){
    const url = "http://localhost:3000/account/register";
    this.http.post<modelsaccount>(url,this.account).subscribe((add)=>{
      console.log('thêm thành công',add);
      alert('Add account successfully')
      window.location.href="showaccountadmin"
    })
  }
}
