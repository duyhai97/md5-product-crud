import { Injectable } from '@angular/core';
import {IProduct} from "../iproduct";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  product: IProduct = {};
  productList: IProduct[] = [
    {
      id: 1,
      name: 'iphone 6',
      price: 6000000,
      description: 'nho gon '
    },
    {
      id: 2,
      name: 'iphone 7',
      price: 8000000,
      description: 'Dep mat '
    },
    {
      id: 3,
      name: 'iphone 8',
      price: 10000000,
      description: 'sang trong'
    },
    {
      id: 4,
      name: 'iphone X',
      price: 12000000,
      description: 'dep'
    },
  ];

  constructor() {
  }

  getAll() {
    return this.productList;
  }

  createProduct(product: IProduct) {
    this.productList.push(product);
  }

  getProductById(id: any) {
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == id) {
        return this.productList[i];
      }
    }
    return null;
  }


}
