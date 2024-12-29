import { Routes } from '@angular/router';
import { TodoListComponent } from './features/todo-list/todo-list.component';
import { HomeComponent } from './features/home/home.component';
import { UserListComponent } from './features/user-list/user-list.component';
import { PracticeComponent } from './features/practice/practice.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ConditionalStuffComponent } from './features/practice/conditional-stuff/conditional-stuff.component';
import { TemplateStuffComponent } from './features/practice/template-stuff/template-stuff.component';
import { userListGuardGuard } from './guards/user-list-guard.guard';
import { ObservablePracticeComponent } from './features/practice/observable-practice/observable-practice.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'todo',
    title: 'Todo',
    component: TodoListComponent,
  },
  // {
  //   path: 'list',
  //   title: 'List',
  //   canActivate: [userListGuardGuard],
  //   loadComponent: () =>
  //     import('./features/user-list/user-list.component').then(
  //       (c) => c.UserListComponent
  //     ),
  // },
  {
    path: 'list',
    title: 'List',
    loadComponent: () =>
      import('./features/user-list/user-list.component').then(
        (c) => c.UserListComponent
      ),
  },
  {
    path: 'practice',
    title: 'Practice',
    component: PracticeComponent,
    children: [
      {
        path: 'conditional',
        component: ConditionalStuffComponent,
      },
      {
        path: 'template',
        component: TemplateStuffComponent,
      },
      {
        path: 'observables',
        component: ObservablePracticeComponent,
      },
      // {
      //   path: '**',
      //   component: TemplateStuffComponent,
      // },
    ],
  },
  {
    path: '**',
    title: 'Not found',
    component: NotfoundComponent,
  },
];
