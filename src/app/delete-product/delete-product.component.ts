import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {IProduct} from "../iproduct";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  product:any;
  productList:IProduct[] = []

  productForm:FormGroup = new FormGroup({
    id:new FormControl(""),
    name :new FormControl(""),
    price :new FormControl(""),
    description :new FormControl("")
  })

  constructor(private data:DataService,
              private ActivatedRoute: ActivatedRoute,
              private router:Router) {
    this.productList = data.productList
  }

  ngOnInit(): void {
    // this.ActivatedRoute.paramMap.subscribe(params => {
    //   let id = params.get("id");
    //   // console.log(111, id);
    //   this.product = this.data.getProductById(id);
    //   // console.log(555, this.product);
    // })
  }


  delete(){
    let product = this.productForm.value;
    console.log("www", product);
    let index = this.productList.indexOf(product)
    console.log("index", index);
    for(let i = 0; i < this.productList.length; i++){
      if (this.productList[i].id === product.id){
        this.productList.splice(index);
        let element:any = document.getElementById('delete');
        element.style.display = 'none'

      }
    }
  }

  back(){
    console.log(1111);
    let element:any = document.getElementById('delete');
    element.style.display = 'none'
  }

}
