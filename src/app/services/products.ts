import { Injectable } from '@angular/core';

// Product interface
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'Description for Product 1',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      description: 'Description for Product 2',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      description: 'Description for Product 3',
      image: 'https://via.placeholder.com/150'
    }
  ];

  constructor() {}

  // Standard casing for method names (camelCase)
  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}