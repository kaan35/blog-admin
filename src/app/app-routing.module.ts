import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { PagesListComponent } from './pages/pages/pages-list/pages-list.component';
import { PagesDetailComponent } from './pages/pages/pages-detail/pages-detail.component';
import { PagesAddComponent } from './pages/pages/pages-add/pages-add.component';

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
    title: 'Dashboard',
  },
  {
    path: '',
    component: IndexComponent,
    title: 'Dashboard',
  },
  {
    path: 'pages/list',
    component: PagesListComponent,
    title: 'Pages',
  },
  {
    path: 'pages/add',
    component: PagesAddComponent,
    title: 'Pages',
  },
  {
    path: 'pages/detail/:id',
    component: PagesDetailComponent,
    title: 'Page Detail',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
