import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListModule } from './pages/list/list.module';
import { ListComponent } from './pages/list/list.page';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ListModule],
})
export class OfficeRoutingModule {}
