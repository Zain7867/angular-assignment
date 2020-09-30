import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginDetailComponent } from './login-detail/login-detail.component';
import { RegisterDetailComponent } from './register-detail/register-detail.component';

const routes: Routes = [
  { path: 'user', component: UserDetailsComponent },
  { path: 'feedback', component: FeedBackComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginDetailComponent },
  { path: 'register', component: RegisterDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
