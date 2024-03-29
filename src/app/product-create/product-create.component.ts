import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  f: any
  submitted : boolean = false
  // title!: string;
  // description!: string;
  // price!: string;
  // image!: string;
  form ={
    title:'',
    description:'',
    price:'',
    image:''
  }
  constructor(private productservice: ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true
    if (this.form.title == "" || this.form.description == "" || this.form.price == "" || this.form.image == "") {
      alert('All Fileds are Mondatory');
      return false
    }
    var product = { id: 0, title: this.form.title, description: this.form.description, price: this.form.price, image: this.form.image }
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
