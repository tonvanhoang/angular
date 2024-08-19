import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, NavComponent, FormsModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: any[] = [];

  ngOnInit(): void {
    this.showcart();
  }

  showcart() {
    const cart = localStorage.getItem('cart');
    if (cart) {
      this.carts = JSON.parse(cart);
      console.log(this.carts);
    }
  }

  addorder() {
    const order = sessionStorage.getItem('order');
    let orderItems: any[] = order ? JSON.parse(order) : [];
    this.carts.forEach(product => {
      orderItems.push(product);
    });
    sessionStorage.setItem('order', JSON.stringify(orderItems));
    console.log('order', orderItems);
  }

  removeItem(index: number) {
    this.carts.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.carts));
  }
}
