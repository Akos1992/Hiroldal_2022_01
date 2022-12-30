import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdatvedelmiComponent } from './adatvedelmi/adatvedelmi.component';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { ImpresszumComponent } from './impresszum/impresszum.component';
import { LoginComponent } from './login/login.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'content/:id', component: ContentComponent },
  { path: 'news/:id', component: NewsDetailComponent },
  { path: 'bejelentkezes', component: LoginComponent },
  { path: 'adatvedelmi', component: AdatvedelmiComponent },
  { path: 'impresszum', component: ImpresszumComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
