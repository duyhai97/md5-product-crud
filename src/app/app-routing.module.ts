import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProductComponent} from "./list-product/list-product.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {DeleteProductComponent} from "./delete-product/delete-product.component";

const routes: Routes = [{
  path: 'product/list',
  component: ListProductComponent
}, {
  path: 'product/create',
  component: AddProductComponent
},
  {
    path: 'product/edit/:id',
    component: EditProductComponent
  },
  {
    path: 'product/delete/:id',
    component: DeleteProductComponent
  }];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
