import { Route } from '@angular/router';
import { IndexComponent } from './index.component';

export const IndexRoutes: Route[] = [
{
path: '',
component: IndexComponent,
children: [
    {
         path: '',
         loadChildren: 'src/app/index/login/login.module#LoginModule'
     },

     {
      path: 'register',
      loadChildren: 'src/app/index/register/register.module#RegisterModule'
  },

  {
    path: 'forget-pass',
    loadChildren: 'src/app/index/forget-pass/forget-pass.module#ForgetPassModule'
},
]
}
];
