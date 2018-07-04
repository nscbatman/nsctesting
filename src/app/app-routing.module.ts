import { CommonComponent } from './common/common.component';
import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { SkillComponent } from './skill/skill.component';
import { EducationComponent } from './education/education.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component: CommonComponent, 
children:[
  {path:'', component:HomepageComponent},
  {path:'education', component: EducationComponent},
  {path:'skills',component: SkillComponent},
  {path:'additional', component:OtherComponent}
]},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
