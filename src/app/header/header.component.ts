import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDisplay: boolean = true
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  createProduct(){
    this.router.navigate(['/product/create'])
    this.isDisplay = false
  }
}
