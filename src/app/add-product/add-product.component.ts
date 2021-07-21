import { Component, OnInit } from '@angular/core';
import {IProduct} from "../iproduct";
import {DataService} from "../services/data.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });



  id = 5
  product: IProduct = {};
  productList: IProduct[] = []

  constructor(private data:DataService) {
  }

  submit(){
    const product = this.productForm.value;
    this.data.createProduct(product);
    let element:any = document.getElementById('abc');
      element.style.display = 'none'
  }



  ngOnInit(): void {
  }

}
