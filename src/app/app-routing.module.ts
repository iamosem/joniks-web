import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { footerRoute } from './layouts/footer/footer.route';
import { navbarRoute } from './layouts/navbar/navbar.route';


// const LAYOUT_ROUTES = [navbarRoute, footerRoute, ...errorRoute, sidebarRooute];
const LAYOUT_ROUTES = [navbarRoute, footerRoute];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        // {
        //   path: 'admin',
        //   data: {
        //     authorities: ['ROLE_ADMIN']
        //   },
        //   canActivate: [UserRouteAccessService],
        //   loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule)
        // },
        // {
        //   path: 'coach',
        //   data: {
        //     authorities: ['ROLE_COACH']
        //   },
        //   canActivate: [UserRouteAccessService],
        //   loadChildren: () => import('./coach/coach-routing.module').then(m => m.CoachRoutingModule)
        // },
        // {
        //   path: 'settings',
        //   data: {
        //     authorities: ['EVERYONE', 'ROLE_USER', 'ROLE_ADMIN', 'ROLE_COACH']
        //   },
        //   canActivate: [UserRouteAccessService],
        //   loadChildren: () => import('./components/settings/settings.module').then(m => m.RenalTrackerSettingsModule)
        // },
        {
          path: 'milktea',
          data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'joniks.global.title',
            breadcrumb: 'joniks.global.menu.milktea'
          },
          loadChildren: () => import('./milktea/milktea.module').then(m => m.JoniksMilkteaModule)
        },
        {
          path: 'fruittea',
          data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'joniks.global.title',
            breadcrumb: 'joniks.global.menu.fruittea'
          },
          loadChildren: () => import('./fruittea/fruittea.module').then(m => m.JoniksFruitteaModule)
        },
        {
          path: 'blended',
          data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'joniks.global.title',
            breadcrumb: 'joniks.global.menu.blended'
          },
          loadChildren: () => import('./blended/blended.module').then(m => m.JoniksBlendedModule)
        },
        {
          path: 'coffee',
          data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'joniks.global.title',
            breadcrumb: 'joniks.global.menu.coffee'
          },
          loadChildren: () => import('./coffee/coffee.module').then(m => m.JoniksCoffeModule)
        },
        ...LAYOUT_ROUTES
      ]
    )
  ],
  exports: [RouterModule]
})
export class JoniksAppRoutingModule { }
