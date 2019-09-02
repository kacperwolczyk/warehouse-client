import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CategoryService } from '../category.service';
import { ProductCategory } from '../product-category';
import { ProductParameter } from '../product-parameter';
 
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
 
  product: Product;
  
  categories: ProductCategory[];
 
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService, private categoryService: CategoryService) {
    this.product = new Product();
	this.categoryService.findAll().subscribe(data => {
      this.categories = data;
    }); 
  }
 
  onSubmit() {
    this.productService.save(this.product).subscribe(result => this.gotoProductList());
  }
 
  gotoProductList() {
    this.router.navigate(['/products']);
  }
  
  add() {
	this.product.parameters.push(new ProductParameter());
  }
  
  remove(parameter) {
	this.product.parameters.splice(this.product.parameters.indexOf(parameter), 1);
  }
}
