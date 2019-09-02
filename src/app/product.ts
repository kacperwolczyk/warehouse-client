import { ProductCategory } from './product-category';
import { ProductComment } from './product-comment';
import { ProductParameter } from './product-parameter';

export class Product {
	id: number;
	name: string;
	category: ProductCategory;
	comments: ProductComment[];
	parameters: ProductParameter[]=[];
	status: string;
}
