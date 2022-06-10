import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { RecommandationPageComponent } from './pages/recommandation-page/recommandation-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { AuthGuard } from './services/auth.guard';




const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: 'main', component: MainPageComponent, canActivate: [AuthGuard]  },
  { path: 'recommandation', component: RecommandationPageComponent, canActivate: [AuthGuard]  },
  { path: '**', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
