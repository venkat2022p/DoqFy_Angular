import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  products : any;
  constructor(private productservice : ProductService) { }

  ngOnInit(): void {
    this.productservice.getProducts().subscribe(((res: any)=>{
      this.products = res;
      console.log(res);
     }))
  }

}
