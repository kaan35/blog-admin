import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { PagesListComponent } from './pages/pages/pages-list/pages-list.component';

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
  { path: 'pages/list', component: PagesListComponent },
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
