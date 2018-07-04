import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { EducationComponent } from './education/education.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OtherComponent } from './other/other.component';
import { SkillComponent } from './skill/skill.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SkillComponent,
    EducationComponent,
    OtherComponent,
    NotfoundComponent,
    CommonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
