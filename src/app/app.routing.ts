import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreLayout } from './features/landing/core.layout';
import { LayoutModule } from './features/landing/core.module';

const routes: Routes = [
  {
    path: '',
    component: CoreLayout,
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('./features/user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./features/product/product.module').then(
            (m) => m.ProductModule
          ),
      },
      {
        path: 'offices',
        loadChildren: () =>
          import('./features/office/office.module').then((m) => m.OfficeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LayoutModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
