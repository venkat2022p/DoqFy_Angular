import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  title!: string;
  description!: string;
  price!: string;
  image!: string;
  constructor(private productservice: ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  submit() {
    if (this.title == "" || this.description == "" || this.price == "" || this.image == "") {
      alert('All Fileds are Mondatory');
      return false
    }
    var product = { id: 0, title: this.title, description: this.description, price: this.price, image: this.image }
    this.productservice.createProducts(product).subscribe(res => {
      console.log(res);
      alert(JSON.stringify(res))
      this.router.navigate(['/admin'])
    })
  }
  cancel(){
    this.router.navigate(['/admin'])
  }
}
