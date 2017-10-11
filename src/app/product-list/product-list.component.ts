import { ProductService } from '../shared/product.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { validate } from 'codelyzer/walkerFactory/walkerFn';

import { iProduct } from './product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = "Joes Products";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  _listFilter: string;
  get listFilter():string {
    return this._listFilter;
  }
  set listFilter(value:string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter):this.products;
  }

  onNotify(message: string): void{
    console.log(message);
  }



  filteredProducts: iProduct[];
  products: iProduct[] = [];


  constructor(private _productService:ProductService){
    this.filteredProducts = this.products;
  }

    performFilter(filterBy:string):iProduct[]{
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product:iProduct)=> product.productName.toLocaleLowerCase().indexOf(filterBy) != -1);
    }

  toggleImage():void{
    this.showImage = !this.showImage;

  }

    public ngOnInit(): void {
        this.products = this._productService.getProducts();
        this.filteredProducts = this.products;
    }
}
