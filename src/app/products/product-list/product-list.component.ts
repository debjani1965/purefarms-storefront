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
              this.products = res.products;
              this.maxProducts = res.maxProducts;
              console.log(this.products)
          })
        }
      );
  }

}
