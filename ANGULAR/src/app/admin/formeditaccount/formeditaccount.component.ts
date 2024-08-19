import { Component, OnInit } from '@angular/core';
import { NavtopadminComponent } from '../navtopadmin/navtopadmin.component';
import { NavleftadminComponent } from '../navleftadmin/navleftadmin.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { modelsaccount } from '../../datamodels/modelsaccount';

@Component({
  selector: 'app-formeditaccount',
  standalone: true,
  imports: [NavtopadminComponent,NavleftadminComponent,CommonModule,FormsModule],
  templateUrl: './formeditaccount.component.html',
  styleUrl: './formeditaccount.component.css'
})
export class FormeditaccountComponent implements OnInit{
  constructor(private http:HttpClient,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const accid = params.get('id')
      if (accid) {
        this.formedit(accid)
      }
    })
  }
  id:string =""
  acc:modelsaccount={
    _id:'',
    name:'',
    role:'',
    password:'',
    email:'',
    avata:'https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg'
  };
  formedit(id:string){
    const url = "http://localhost:3000/account/accountbyid/"+id;
    this.http.get<modelsaccount>(url).subscribe((data)=>{
      this.id=id;
      this.acc = data
      console.log('show thành công',this.acc);
    })
  }
  edit(id:string){
    const url = "http://localhost:3000/account/edit/"+ id;
    this.http.put<modelsaccount>(url,this.acc).subscribe((edi)=>{
      console.log('sửa thành công',edi);
      alert('Edit product successfully')
      window.location.href="showaccountadmin"
    })
  }
}
