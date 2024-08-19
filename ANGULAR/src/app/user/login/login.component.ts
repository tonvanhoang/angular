import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router, RouterLink } from '@angular/router';
import {jwtDecode} from 'jwt-decode'; // Sửa đổi để sử dụng jwtDecode thay vì jwt-decode
import { NavComponent } from '../nav/nav.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NavComponent,RouterLink], // You may need to replace NavComponent with the correct path
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class LoginComponent implements OnInit {
  formlogin!: FormGroup;
  constructor(private http: HttpClient,private router:Router) {}
  ngOnInit(): void {
    this.formlogin = new FormGroup({
      'password': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(200)]),
      'email': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(200)])
    });
  }
  clickform(): void {
    if (this.formlogin.valid) {
      const formData = this.formlogin.value;
      this.http.post<any>('http://localhost:3000/account/login', formData).subscribe(
        (response) => {
          const token = response.token;
          console.log('Token:', token); // Log ra token
          localStorage.setItem('token', token);
          const decodedToken = this.decodeToken(token);
          if (decodedToken && decodedToken.role) {
            // luu session
            const accountInfo = response.account; 
            localStorage.setItem('account', JSON.stringify(accountInfo));
            if (decodedToken.role === 'admin') {
              this.router.navigate(['showproductadmin']); 
            } else if (decodedToken.role === 'user') {
              this.router.navigate(['home']);
            } else {
              console.error('Vai trò không hợp lệ:', decodedToken.role);
              this.router.navigate(['error']); // Điều hướng đến trang lỗi nếu vai trò không hợp lệ
            }
          } else {
            console.error('Token không hợp lệ hoặc không có vai trò.');
            console.log(decodedToken);
            
          }
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    } else {
      this.formlogin.markAllAsTouched();
      console.log('Form không hợp lệ');
    }
  }
  decodeToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
    
  }
  
}
