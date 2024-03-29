import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product.edit',
  templateUrl: './product.edit.component.html',
  styleUrls: ['./product.edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productId: any;
  product: any
  loading: boolean = true
  pro = {
    id: '',
    title: '',
    description: '',
    price: '',
    image: ''
  }

  constructor(private route: ActivatedRoute, private productservice: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productservice.getProduct(this.productId).subscribe(res => {
      this.pro = res;
      console.log(res);
      this.loading = false
    })
  }
  submit() {
    var inputProduct ={
      id: this.pro.id,
      title: this.pro.title,
      description : this.pro.description,
      price: this.pro.price,
      image: this.pro.image
    }
    this.productservice.updateProduct(inputProduct, this.productId).subscribe(res => {
      console.log(res);
      alert(JSON.stringify(res))
      this.router.navigate(['/admin'])
    })
  }
  cancel() {
    this.router.navigate(['/admin'])
  }
}
