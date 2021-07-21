import { Component, OnInit } from '@angular/core';
import {IProduct} from "../iproduct";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  productList: IProduct[] = [];

  constructor(private data:DataService) {

  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productList = this.data.getAll();
  }

  displayCreate() {
    let element:any = document.getElementById('abc');
    element.style.display = 'block';
  }
  displayEdit() {
    let element:any = document.getElementById('xyz');
    element.style.display = 'block';
  }

  displayDelete() {
    let element:any = document.getElementById('delete');
    element.style.display = 'block';
  }




}
