import { Route } from '@angular/router';
import { HomeComponent } from './home.component';

export const HomeRoutes: Route[] = [
{
path: '',
component: HomeComponent,
children: [
{ path: 'dashboard', loadChildren: 'src/app/home/dashboard/dashboard.module#DashboardModule' },
{ path: 'cart', loadChildren: 'src/app/home/cart/cart.module#CartModule' }
]
}
];
