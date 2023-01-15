import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        loadChildren: () =>
          import('./pages/list/list.module').then((m) => m.ListModule),
      },
      {
        path: 'list/page/:page/shipid/:id',
        loadChildren: () =>
          import('./pages/ship/ship.module').then((m) => m.ShipModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
