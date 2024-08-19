import { Component, OnInit } from '@angular/core';
import { NavtopadminComponent } from '../navtopadmin/navtopadmin.component';
import { NavleftadminComponent } from '../navleftadmin/navleftadmin.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [NavtopadminComponent,NavleftadminComponent,CommonModule,RouterLink],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent implements OnInit{
  constructor(private http:HttpClient){}
ngOnInit(): void {
  this.showcmt()
}
comments:any;
showcmt(){
  const url = "http://localhost:3000/comment/all";
  this.http.get<any>(url).subscribe((data)=>{
    this.comments = data;
    console.log('show cmt', data);
  })
}
id:string=""
delete(id:string){
  const url="http://localhost:3000/comment/delete/"+id;
  this.http.delete<any>(url).subscribe((dele)=>{
    console.log('xóa thành công',dele);
    alert('xóa')
    this.showcmt()
  })
}
}
