import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {
    path: '',
    component: LayoutComponent,
    children: [
        {
            path: 'home',
            loadChildren: () => import('./pages/landing-page/landing-page.module').then(m => m.LandingPageModule)
        },
    ]
},

{
  path: '',
  component: LayoutComponent,
  children: [
      {
          path: 'about',
          loadChildren: () => import('./pages/about-page/about-page.module').then(m => m.AboutPageModule)
      },
  ]
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
