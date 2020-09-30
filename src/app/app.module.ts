import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginDetailComponent } from './login-detail/login-detail.component';
import { RegisterDetailComponent } from './register-detail/register-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    FeedBackComponent,
    AboutUsComponent,
    HomePageComponent,
    LoginDetailComponent,
    RegisterDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
