import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageModule } from './pages/list/list.module';
import { ListPageComponent } from './pages/list/list.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ListPageModule],
  exports: [RouterModule],
})
export class UserRoutingModule {}
