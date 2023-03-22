import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './components/data-table/data-table.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DataTableComponent,
  },
  {
    path: 'details/:id',
    component: HeroDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
