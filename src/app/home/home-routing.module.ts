import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
import { NewsPage } from '../news/news.page';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'news',
        outlet: 'news',
        component: NewsPage
      },
      {
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      }
    ]
  },

{
  path: '',
  redirectTo: '/home/(news:news)',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
