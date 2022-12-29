import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdatvedelmiComponent } from './adatvedelmi/adatvedelmi.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImpresszumComponent } from './impresszum/impresszum.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bejelentkezes', component: LoginComponent },
  { path: 'adatvedelmi', component: AdatvedelmiComponent },
  { path: 'impresszum', component: ImpresszumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
