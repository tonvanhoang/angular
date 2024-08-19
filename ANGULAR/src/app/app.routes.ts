import { Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { AllproductsComponent } from './user/allproducts/allproducts.component';
import { CartComponent } from './user/cart/cart.component';
import { DetailComponent } from './user/detail/detail.component';
import { ProductadminComponent } from './admin/productadmin/productadmin.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { RegisterComponent } from './user/register/register.component';
import { AccountComponent } from './admin/account/account.component';
import { FormaddproductComponent } from './admin/formaddproduct/formaddproduct.component';
import { FormaddcategoryComponent } from './admin/formaddcategory/formaddcategory.component';
import { FormeditcategoryComponent } from './admin/formeditcategory/formeditcategory.component';
import { FormeditproductComponent } from './admin/formeditproduct/formeditproduct.component';
import { FormaddacountComponent } from './admin/formaddacount/formaddacount.component';
import { FormeditaccountComponent } from './admin/formeditaccount/formeditaccount.component';
import { LoginComponent } from './user/login/login.component';
import { ProductBycategoryComponent } from './user/product-bycategory/product-bycategory.component';
import { CommentComponent } from './admin/comment/comment.component';
import { FormrepcommentComponent } from './admin/formrepcomment/formrepcomment.component';
import { OrderComponent } from './user/order/order.component';
import { MyorderComponent } from './user/myorder/myorder.component';
import { OrderadminComponent } from './admin/orderadmin/orderadmin.component';
import { FormstatusComponent } from './admin/formstatus/formstatus.component';
export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch:'full'}, //  đẻ chuyển trang mặc định là home 
    {path: 'home', component: HomeComponent},
    {path:'allproducts', component:AllproductsComponent},
    {path:'cart',component:CartComponent},
    {path:'detail/:id',component:DetailComponent},
    {path:'register',component:RegisterComponent},
    {path:'productbycategory/:id',component:ProductBycategoryComponent},
    {path:'order',component:OrderComponent},
    {path:'myorder',component:MyorderComponent},
    // admin
    {path:'showproductadmin',component:ProductadminComponent},
    {path:'showcategoryadmin',component:CategoriesComponent},
    {path:"showaccountadmin",component:AccountComponent},
    {path:'showformaddproduct',component:FormaddproductComponent},
    {path:'showformeditcategory/:id',component:FormeditcategoryComponent},
    {path:'showformaddcategory',component:FormaddcategoryComponent},
    {path:'showformeditproduct/:id',component:FormeditproductComponent},
    {path:'showformaddaccount',component:FormaddacountComponent},
    {path:'showformeditaccount/:id',component:FormeditaccountComponent},
    {path:'login',component:LoginComponent},
    {path:'showcommentadmin',component:CommentComponent},
    {path:'repcmt/:id',component:FormrepcommentComponent},
    {path:'orderadmin', component:OrderadminComponent},
    {path:'status/:id',component:FormstatusComponent}
];
