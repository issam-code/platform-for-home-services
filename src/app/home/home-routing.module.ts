import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {  
    path: '',
    component: HomePage,
    children: [
      {
        path: 'news',
      children: [
        {
          path: '',
          loadChildren: () => import('../news/news.module').then(m => m.NewsPageModule)
        }
          ]
      },
      {
        path: 'about',
      children: [
        {
          path: '',
          loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
        }
          ]
      },
      {
        path: 'contact',
      children: [
        {
          path: '',
          loadChildren: () => import('../contact/contact.module').then(m => m.ContactPageModule)
        }
          ]
      },
      {
        path: '',
        redirectTo: 'news',
        pathMatch: 'full'
      }
    ]

  },
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
