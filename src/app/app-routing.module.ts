import {NgModule} from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {SignupComponent} from "./components/auth/signup/signup.component";

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
