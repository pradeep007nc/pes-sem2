import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { Route1Component } from './route1/route1.component';

const routes: Routes = [
  { path: 'route', component: Route1Component },
  { path: 'form', component: ReactiveFormComponent },
  { path: '',   redirectTo: 'route', pathMatch: 'full' },
  { path: '**', component: Route1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
