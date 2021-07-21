import { Component, OnInit } from '@angular/core';
import {IProduct} from "../iproduct";
import {DataService} from "../services/data.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productForm:FormGroup = new FormGroup({
    id:new FormControl(""),
    name :new FormControl(""),
    price :new FormControl(""),
    description :new FormControl("")
  })

  productList:IProduct[] = [];

  constructor(private data:DataService,
  private activatedRoute: ActivatedRoute,
  private routers: Router) {
   { }
    this.productList = data.productList;
  }


  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe(paramMap =>{
    //   let id = paramMap.get("id");
    //   let product;
    //
    //   if( (product = this.data.getProductById(id))!=null){
    //     console.log(product);
    //     this.productForm.controls['id'].setValue(product.id);
    //     this.productForm.controls['name'].setValue(product.name);
    //     this.productForm.controls['price'].setValue(product.price);
    //     this.productForm.controls['description'].setValue(product.description);
    //     console.log("qsq",product );
    //   }
    //
    // })
  }

  editProduct() {
    let product = this.productForm.value;
    console.log("aaa", product);
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id === product.id) {
        this.productList[i] = product;
        console.log(111, product);
      }
    }
      let element:any = document.getElementById('xyz');
      element.style.display = 'none'
  }

}
