import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';
import { ProductComment } from './product-comment';

@Injectable()
export class CommentService {

  private commentsUrl: string;

  constructor(private http: HttpClient) {
  }
 
  public commentProduct(comment: ProductComment, product: Product) {
	this.commentsUrl = 'http://localhost:8080/products/' + product.id + '/comment';
    return this.http.post<Product>(this.commentsUrl, comment);
  }
  
}
