import { Component, OnInit } from '@angular/core';
import { NavtopadminComponent } from '../navtopadmin/navtopadmin.component';
import { NavleftadminComponent } from '../navleftadmin/navleftadmin.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ordermodels } from '../../datamodels/modelsorder';

@Component({
  selector: 'app-formstatus',
  standalone: true,
  imports: [NavtopadminComponent, NavleftadminComponent, FormsModule, CommonModule],
  templateUrl: './formstatus.component.html',
  styleUrls: ['./formstatus.component.css']
})
export class FormstatusComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idorder = params.get('id');
      if (idorder) {
        this.formstatus(idorder);
      }
    });  
  }
  id: string = "";
  ord: ordermodels = {
    _id: '',
    date: '',
    address: '',
    status: '',
    name: '',
    phonenumber: 0,
    id_account: '',
    id_product: ''
  };
  formstatus(id:string) {
    const url = `http://localhost:3000/order/chitiet/${id}`;
    this.http.get<any>(url).subscribe((data) => {      
        this.id = id;
        this.ord = data;
        console.log('Order details:', this.ord);
      }
    );
  }
  updateorder(id: string) {
    alert('Updating order...');
    const url = `http://localhost:3000/order/editorder/${id}`;
    this.http.put<ordermodels>(url, this.ord).subscribe((data) => {
        console.log('Update successful:', data);
        this.ord = data;
        window.location.href = "orderadmin";
      }
    );
  }
}
