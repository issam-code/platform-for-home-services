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
        path: 'discussion',
      children: [
        {
          path: '',
          loadChildren: () => import('../discussion/discussion.module').then(m => m.DiscussionPageModule)
        }
          ]
      },
      {
        path: 'profil',
      children: [
        {
          path: '',
          loadChildren: () => import('../profil/profil.module').then(m => m.ProfilPageModule)
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
