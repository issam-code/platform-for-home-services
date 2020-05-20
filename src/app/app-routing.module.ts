import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registre',
    loadChildren: () => import('./registre/registre.module').then( m => m.RegistrePageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'discussion',
    loadChildren: () => import('./discussion/discussion.module').then( m => m.DiscussionPageModule)
  },  {
    path: 'conversation',
    loadChildren: () => import('./conversation/conversation.module').then( m => m.ConversationPageModule)
  }



  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
