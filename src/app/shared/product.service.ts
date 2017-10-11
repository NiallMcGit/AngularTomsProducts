import { retry } from 'rxjs/operator/retry';
import { iProduct } from '../product-list/product';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts():iProduct[]{
    return[
      {
        'productId':2,
        'productName': 'Garden Cart',
        'productCode': 'GTN-0023',
        'releaseDate': 'March 18, 2016',
        'description': '15 Gallon Capacity rolling Garden Cart',
        'price': 32.99,
        'starRating': 2.5,
        'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
      },
      {
        'productId':5,
        'productName': 'Hammer',
        'productCode': 'TBX-0048',
        'releaseDate': 'May 21, 2016',
        'description': 'Curved Claw Steel Hammer',
        'price': 8.99,
        'starRating': 3.6,
        'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
      },
      {
        'productId':6,
        'productName': 'Big Hammer',
        'productCode': 'HBX--0048',
        'releaseDate': 'June 21, 2016',
        'description': 'Big Curved Claw Steel Hammer',
        'price': 8.99,
        'starRating': 5,
        'imageUrl': 'https://openclipart.org/image/2400px/svg_to_png/2553/Machovka-Hammer-1.png'
      }
    ];
  }

}
