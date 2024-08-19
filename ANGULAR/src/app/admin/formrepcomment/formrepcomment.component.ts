import { Component, OnInit } from '@angular/core';
import { NavleftadminComponent } from '../navleftadmin/navleftadmin.component';
import { NavtopadminComponent } from '../navtopadmin/navtopadmin.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { commentmodels } from '../../datamodels/modelscomment';
@Component({
  selector: 'app-formrepcomment',
  standalone: true,
  imports: [NavleftadminComponent,NavtopadminComponent,CommonModule,FormsModule],
  templateUrl: './formrepcomment.component.html',
  styleUrl: './formrepcomment.component.css'
})
export class FormrepcommentComponent implements OnInit{
  constructor(private http:HttpClient, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.idcmt()
  }
  idcmt(){
    this.route.paramMap.subscribe((params)=>{
      const idcmt = params.get('id');
      if(idcmt){
        this.showdetailcmt(idcmt)
      }
    })
  }
  comment:commentmodels={
    _id:'',
    comment:'',
    rep_comment:'',
    datecomment:'',
    id_product:'',
    id_account:''
  }
  showdetailcmt(id:string){
    const url ="http://localhost:3000/comment/cmtbyid/"+id;
    this.http.get<any>(url).subscribe((data)=>{
      this.comment = data;
      console.log('show detai cmt',this.comment);
    })
  }
  id:string=''
  rep(id:string){
    const url = "http://localhost:3000/comment/repcmt/" +id;
    this.http.put<any>(url,this.comment).subscribe((rep)=>{
      console.log('thành công',rep);
      alert('rep')
      window.location.href="showcommentadmin"
    })
  }

}
