import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProductEditComponent } from './product.edit/product.edit.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  { path:'', component:AdminDashboardComponent},
  { path:'admin', component:AdminDashboardComponent},
  { path:'product/create', component:ProductCreateComponent},
  { path:'products/:id', component:ProductEditComponent},
  { path:'cards-list', component:CardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
