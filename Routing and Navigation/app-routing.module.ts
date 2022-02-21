import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [{ path: '', redirectTo:'/home', pathMatch: 'full' },
                        { path: 'about', component:AboutComponent },
                        { path: 'contact', component:ContactComponent },
                        { path: 'home', component:HomeComponent },
                        { path: 'products', component:ProductComponent },
                        { path: 'product-details', component:ProductDetailsComponent },
                        { path: '**', component:Page404Component }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AboutComponent, ProductComponent, ProductDetailsComponent, ContactComponent, Page404Component]
