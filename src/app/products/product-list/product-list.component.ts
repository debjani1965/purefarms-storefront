import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  categoryId: string = '';
  category: string = '';
  products: Product[] = [];
  maxProducts = 0;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.categoryId = params['categoryId'];
          this.category = this.categoryId.split('_').join(' ');
          this.productService.getProducts(this.categoryId).subscribe((res)=> {
              this.products = [...res.products];
              this.products.forEach(product => {
                if(product.unit != 'gm') {
                  if(product.availableQty[0] == '500') {
                    product.calculatedPrice = product.pricePerUnit
                  } else {
                    product.calculatedPrice = product.pricePerUnit * +(product.availableQty[0]);
                  }                 
                } else {
                  product.calculatedPrice = product.pricePerUnit;
                }
              })
              this.maxProducts = res.maxProducts;
          })
        }
      );
  }
  
  selectQty(event, index) {
    let selectedQty = +event.target.value;
    let selectedProduct = this.products[index];
    let price = this.products[0].pricePerUnit;
    console.log(selectedQty )
    if(selectedProduct.unit == 'gm' && (selectedQty == 100 || selectedQty == 250 || selectedQty == 500 || selectedQty == 750)) {
      if(selectedProduct.availableQty[0] == '100') {
        switch(selectedQty) {
         case 250 :
            selectedProduct.calculatedPrice = selectedProduct.pricePerUnit * 2.5;
            break;
          case 500 :
            selectedProduct.calculatedPrice = selectedProduct.pricePerUnit * 5;
            break;
          case 750 :
            selectedProduct.calculatedPrice = selectedProduct.pricePerUnit * 7.5;
            break;
          default:
            selectedProduct.calculatedPrice = selectedProduct.pricePerUnit;
        }
      } else {
        switch(selectedQty) {
          case 500 :
             selectedProduct.calculatedPrice = selectedProduct.pricePerUnit *2;
             break;
           case 750 :
             selectedProduct.calculatedPrice = selectedProduct.pricePerUnit * 3;
             break;
           default:
             selectedProduct.calculatedPrice = selectedProduct.pricePerUnit;
        }
      }      
    } else {
      if(selectedProduct.availableQty[0] == '500') {
        switch(selectedQty) {
          case 500:
            selectedProduct.calculatedPrice = selectedProduct.pricePerUnit;
            break;
          default:
            selectedProduct.calculatedPrice = (selectedProduct.pricePerUnit * 2) * +selectedQty;
        }        
      } else {
        selectedProduct.calculatedPrice = selectedProduct.pricePerUnit * +selectedQty;
      }      
    }    
  }
}
