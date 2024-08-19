import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ordermodels } from '../../datamodels/modelsorder';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [NavComponent, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: any[] = [];
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.showorder();
    this.idaccount();
    this.idproduct();
  }
  idaccount() {
    const idacc = localStorage.getItem('account');
    if (idacc) {
      try {
        const account = JSON.parse(idacc);
        if (account && account._id) {
          this.order.id_account = account._id;
        }
      } catch (error) {
        console.error('Error parsing account from localStorage', error);
      }
    }
  }
  idproduct() {
    const sesspro = sessionStorage.getItem('order')
    if(sesspro){
      const id = JSON.parse(sesspro);
      id.forEach((element:any) => {
        console.log("id",element._id);
        this.order.id_product = element._id;
      });
    }
  }
  showorder() {
    const order = sessionStorage.getItem('order');
    if (order) {

        this.orders = JSON.parse(order);
        console.log('sản phẩm cần thanh toán ', this.orders);
    }
  }
  currentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  }
  order: ordermodels = {
    _id: '',
    date: this.currentDate(),
    address: '',
    status: 'awaiting confirmation',
    name: '',
    phonenumber: 0,
    id_account: '',
    id_product: ''
  };
  addorder() {
    alert('Successful purchase');
    const url = 'http://localhost:3000/order/addorder';
    this.http.post<any>(url, this.order).subscribe({
      next: (data) => {
        console.log('Success', data);
      },
      error: (error) => {
        console.error('Error adding order', error);
      }
    });
  }
}
