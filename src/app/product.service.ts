import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class ProductService {
 
  private productsUrl: string;
 
  constructor(private http: HttpClient) {
    this.productsUrl = 'http://localhost:8080/products';
  }
 
  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
 
  public save(product: Product) {
    return this.http.post<Product>(this.productsUrl, product);
  }
  
  public findProduct(productId: number): Observable<Product> {
	return this.http.get<Product>(this.productsUrl + '/' + productId);
  }
  
  public changeProductStatus(product: Product) {
	return this.http.put<Product>(this.productsUrl + '/' + product.id, product);
  }
}
