import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { ProductCategory } from '../product-category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {
 
  category: ProductCategory;
  
  constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService) {
	this.category = new ProductCategory();
  }

  onSubmit() {
    this.categoryService.save(this.category).subscribe(result => this.gotoCategoryList());
  }
 
  gotoCategoryList() {
    this.router.navigate(['/categories']);
  }

}