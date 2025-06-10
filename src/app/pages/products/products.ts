import { Component } from '@angular/core';
import { ProductsService } from '../../services/products'; // Correct service import
import { Product } from '../../services/products'; // Product interface import

@Component({
  selector: 'app-products',
  standalone: true, // Add this if using standalone components
  imports: [], // Add any needed imports here
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent { // Better naming convention for components
  products: Product[] = [];

  constructor(private productsService: ProductsService) { // Correct service name
    this.products = this.productsService.getProducts();
  }
}