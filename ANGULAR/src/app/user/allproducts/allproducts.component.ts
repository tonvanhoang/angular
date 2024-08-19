import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavComponent } from '../nav/nav.component';
import { CATE } from '../../datamodels/modelscategory';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-allproducts',
  standalone: true,
  imports: [NavComponent, RouterLink, CommonModule, NgxPaginationModule],
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  products: any;
  categories: CATE[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getallproducts();
    this.getallcategory();
  }
  getallproducts() {
    const url = 'http://localhost:3000/product/allproduct';
    this.http.get<any>(url).subscribe((data: any) => {
      console.log('show sản phẩm', data);
      this.products = data;
    });
  }
  getallcategory() {
    const url = 'http://localhost:3000/category/allcate';
    this.http.get<CATE[]>(url).subscribe((data: CATE[]) => {
      console.log('show all cate', data);
      this.categories = data;
    });
  }
  currentPageIndex = 1;
  itemsPerPage = 9;
  onPageIndexClicked(pageIndex: number) {
    this.currentPageIndex = pageIndex;
  }
  pagesArray() {
    return Array(Math.ceil(this.products.length / this.itemsPerPage)).fill(0).map((x, i) => i + 1);
  }
}
