import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  products : any;

  constructor(private productService : ProductService, private router : Router) { }

  ngOnInit(): void {
    this.data()
  }
data(){
 this.productService.getProducts().subscribe(((res: any)=>{
  this.products = res;
  console.log(res);
 }))
}
deleteProductData(id: any){
// this.productService.deleteProduct(id).subscribe(res=>{
//   this.products= res;
//   console.log(res)
// })
this.productService.deleteProduct(id).subscribe((res: any) => {
  alert(JSON.stringify(res))
  for (let i = 0; i < this.products.length; ++i) {
    if (this.products[i].id === id) {
      this.products.splice(i, 1);
    }
  }
  console.log(res, 'deleted')
})

}
submit(){

}
createProduct(){
  this.router.navigate(['/product/create']);
 
}
}
