import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { RecommandationPageComponent } from './pages/recommandation-page/recommandation-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'recommandation', component: RecommandationPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
