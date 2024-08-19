import { Component, OnInit } from '@angular/core';
import { modelsproduct } from '../../datamodels/modelsproduct';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { CommentComponent } from '../comment/comment.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [NavComponent, CommonModule, CommentComponent, FormsModule], // Include FormsModule
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product: any;
  selectedQuantity: number = 1; // Default quantity
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      if (productId) {
        this.detailProduct(productId);
      }
    });
  }
  detailProduct(id: string) {
    const url = `http://localhost:3000/product/productByID/` + id;
    this.http.get<modelsproduct>(url).subscribe((data: modelsproduct) => {
      console.log('Show chi tiết sản phẩm thành công', data);
      this.product = data;
    });
  }
  addcart() {
    const productToAdd = { ...this.product, selectedQuantity: this.selectedQuantity };
    let cart = localStorage.getItem('cart');
    let cartItems: any[] = [];
    if (cart) {
        cartItems = JSON.parse(cart);
        if (!Array.isArray(cartItems)) {
          cartItems = [];
        }
    }
    cartItems.push(productToAdd);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert('Add to cart successfully');
    console.log('cart', cartItems);
  }
}
