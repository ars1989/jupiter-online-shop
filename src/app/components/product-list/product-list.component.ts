import {Component, OnInit} from '@angular/core';
import {Product} from '../../common/product';
import {ProductServiceService} from '../../service/product/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product [];

  constructor(private productService: ProductServiceService) {
  }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.productService.getProducts().subscribe(
      data => this.products = data
    );
  }

}
