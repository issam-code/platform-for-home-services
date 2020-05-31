import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeprPage } from './homepr.page';

const routes: Routes = [
  {  
    path: '',
    component: HomeprPage,
    children: [
      {
        path: 'newspr',
      children: [
        {
          path: '',
          loadChildren: () => import('../newspr/newspr.module').then(m => m.NewsprPageModule)
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
        redirectTo: 'newspr',
        pathMatch: 'full'
      }
    ]

  },
  {
    path: '',
    redirectTo: 'newspr',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeprPageRoutingModule {}
