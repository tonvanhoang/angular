import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { commentmodels } from '../../datamodels/modelscomment';
import { modelsaccount } from '../../datamodels/modelsaccount';
@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.idpro();
    this.idacc();
  }
  // lấy id product
  idpro() {
    this.route.paramMap.subscribe(params => {
      var idpro = params.get('id');
      if (idpro) {
        this.showcomment(idpro); // lấy id_product để hiện theo product
        this.cmt.id_product = idpro; // lấy idproduct để adđ comment
      }
    });
  }
  // lấy id account
  idacc(): void {
    const accountJson = localStorage.getItem('account');
    if (accountJson) {
      const acc = JSON.parse(accountJson);
      if (acc) {
        this.cmt.id_account = acc._id; //lấy để acc lên cmt
      }
    }
  }
  currentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
}
  cmt:commentmodels= {
    _id:'',
    comment: '',
    rep_comment: '',
    datecomment: this.currentDate(),
    id_product: '',
    id_account: ''
  };
  addcomment() {
    const url = "http://localhost:3000/comment/add";
    this.http.post<commentmodels>(url, this.cmt).subscribe((ad) => {
      console.log('add thành công', ad);
        this.showcomment(this.cmt.id_product); // khi add lên thì gọi lại để nó hiện lên theo product
    });
  }
  comments: commentmodels[] = [];
  accounts: { [key: string]: modelsaccount } = {};
  showcomment(id: string) {
    const url = "http://localhost:3000/comment/commentbyid/" + id;
    this.http.get<commentmodels[]>(url).subscribe((data) => {
      this.comments = data; // show cmt

      this.comments.forEach(comment => {
        if (comment.id_account && !this.accounts[comment.id_account]) {
          this.showaccount(comment.id_account); // show account
        }
      });
    });
  }

  showaccount(id: string) {
    const url = "http://localhost:3000/account/accountbyid/" + id;
    this.http.get<modelsaccount>(url).subscribe((data) => {
      this.accounts[id] = data;
    });
  }
}
