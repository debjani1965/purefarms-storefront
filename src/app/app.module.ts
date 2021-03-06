import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BannerComponent } from './banner/banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { WeeklyComboComponent } from './weekly-combo/weekly-combo.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MalasProductComponent } from './malas-product/malas-product.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryItemComponent } from './categories/category-item/category-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenubarComponent,
    ContactsComponent,
    BannerComponent,
    AboutUsComponent,
    ProductListComponent,
    DashboardComponent,
    CartComponent,
    WeeklyComboComponent,
    ContactUsComponent,
    MalasProductComponent,
    CategoryListComponent,
    CategoryItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
