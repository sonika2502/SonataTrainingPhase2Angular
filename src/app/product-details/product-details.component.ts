import { Component } from '@angular/core';
import { Products } from './products';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  data:any[]=[
    new Products(101,"pendrive",200,"securely transferring and storing data"),
    new Products(102,"mouse",80,"pointing and clicking"),
    new Products(103,"keyboard",100,"type letters, numbers, and commands into your computer"),
    new Products(104,"joystick",50,"interactive control device "),
  ];
}
