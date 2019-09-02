import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductCategory } from './product-category';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class CategoryService {
 
  private categoriesUrl: string;
 
  constructor(private http: HttpClient) {
    this.categoriesUrl = 'http://localhost:8080/categories';
  }
 
  public findAll(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(this.categoriesUrl);
  }
 
  public save(category: ProductCategory) {
    return this.http.post<ProductCategory>(this.categoriesUrl, category);
  }
}