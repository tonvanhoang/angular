import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HttpClient } from '@angular/common/http';
import { modelsaccount } from '../../datamodels/modelsaccount';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NavComponent,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.register =new FormGroup({
      'name': new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(100)]),
      'password':new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(50)]),
      'email':new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(200)])
    })
  }
  register!:FormGroup
  account:modelsaccount={
    _id:"",
    name:"",
    role:"user",
    password:"",
    email:"",
    avata:"https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg"
  }
  clickform(){
   if(this.register.valid){
    const url = "http://localhost:3000/account/register";
    this.http.post<modelsaccount>(url,this.account).subscribe((add)=>{
      console.log('thêm thành công',add);
      alert('SignUp successfully')
      window.location.href="home"
   })
  }else{
    this.register.markAllAsTouched()
   }
}
}
