import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageModule } from './pages/list/list.module';
import { ListPageComponent } from './pages/list/list.page';

const routes: Routes = [
  {
    path: '',
    component: ListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ListPageModule],
})
export class UserRoutingModule {}
