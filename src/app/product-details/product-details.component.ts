import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CommentService } from '../comment.service';
import { ProductComment } from '../product-comment';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  
  comment: ProductComment;
  
  private routeSub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService, private commentService: CommentService) { 
    this.comment = new ProductComment();
    this.routeSub = this.route.params.subscribe(params => {
	  this.productService.findProduct(params['productId']).subscribe(data => {
        this.product = data;
      }); 
    });
  }
  
  onComment() {
    this.commentService.commentProduct(this.comment, this.product).subscribe(result => this.gotoProductDetails());
  }
  
  onChangeStatus() {
	this.productService.changeProductStatus(this.product).subscribe(result => this.gotoProductDetails());
  }
  
  gotoProductDetails() {
    location.reload();
  }
  
  ngOnInit() {

  }

}
