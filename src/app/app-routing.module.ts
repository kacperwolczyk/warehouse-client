import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
 
const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'addproduct', component: ProductFormComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'addcategory', component: CategoryFormComponent },
  { path: 'products/:productId', component: ProductDetailsComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }