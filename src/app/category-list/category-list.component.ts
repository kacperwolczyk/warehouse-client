import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCategory } from '../product-category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  categories: ProductCategory[];

  constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService) {
	this.categoryService.findAll().subscribe(data => {
      this.categories = data;
    });  
  }

  
}
