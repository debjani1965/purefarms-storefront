import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MalasProductComponent } from './malas-product/malas-product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { WeeklyComboComponent } from './weekly-combo/weekly-combo.component';

const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'products/:categoryId', component: ProductListComponent},
  {path: 'cart', component: CartComponent},
  {path: 'weekly-combo', component: WeeklyComboComponent},
  {path: 'malas-product', component: MalasProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
