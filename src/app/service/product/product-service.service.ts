import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../common/product';
import {map} from 'rxjs/operators';
import {ProductLinesMap} from '../../common/product-lines-map';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private baseUrl = 'http://localhost:8080/jupiter//api/products';

  constructor(private httpClient: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<GetProductResponse>(this.baseUrl).pipe(
      map(response => response.result.products));
  }
}

interface GetProductResponse {
  result: {
    products: Product[];
    productLinesMap: ProductLinesMap;
  };
}
