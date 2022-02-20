import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
const routes: Routes = [{path:'about', component:AboutComponent},
                        {path:'skills', component:SkillsComponent},
                        {path:'contacts', component:ContactsComponent},
                        {path:'portfolio', component:PortfolioComponent}
                        ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
