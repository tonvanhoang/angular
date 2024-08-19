import { Component, OnInit } from '@angular/core';
import { NavtopadminComponent } from '../navtopadmin/navtopadmin.component';
import { NavleftadminComponent } from '../navleftadmin/navleftadmin.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { ordermodels } from '../../datamodels/modelsorder';

@Component({
  selector: 'app-orderadmin',
  standalone: true,
  imports: [NavtopadminComponent, NavleftadminComponent, CommonModule, RouterLink],
  templateUrl: './orderadmin.component.html',
  styleUrls: ['./orderadmin.component.css']
})
export class OrderadminComponent implements OnInit {
  orders: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.showallorder();
  }

  showallorder() {
    const url = 'http://localhost:3000/order/all';
    this.http.get<ordermodels>(url).subscribe((data:ordermodels) => {
      console.log('show data', data);
      this.orders = data;

      // Fetch account data for each order
      this.orders.forEach((order:any, index:any) => {
        this.showaccount(order, index);
      });
    });
  }
  showaccount(order: any, index: number) {
    const url = `http://localhost:3000/account/accountbyid/${order.id_account}`;
    this.http.get<any>(url).subscribe((data) => {
      console.log('tài khoản', data);
      this.orders[index].acc = data;
    });
  }
}
