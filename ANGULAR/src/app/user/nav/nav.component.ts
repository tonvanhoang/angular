import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
// thêm router link để điều hướng trang
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  ngOnInit(): void {
    this.showacc()
  }
  showacc(){
      let sessionAccount = localStorage.getItem('account');
      if(sessionAccount){
        let acc = JSON.parse(sessionAccount);
        console.log(acc);
        let show ='';
        show+=`
        <div class="acc d-flex" >
        <div class="img">
        <img style="width:50px" src="${acc.avata}">
        </div>
       <div class="mx-2">
       <a class="d-block fw-bold text-decoration-none text-black text-start">${acc.email}</a>
       <a class="d-block text-decoration-none text-black text-start fs-6">${acc.name}</a>
       </div>
        </div>
        `;
        (document.getElementById('showacc')as HTMLElement).innerHTML = show
      }
  }
  logout(){
    if(confirm('bạn có muốn đăng xuất không?')){
      localStorage.removeItem('account');
      window.location.href="home"
    }
  }
}
