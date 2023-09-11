import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NestedComponent } from './nested/nested.component';
import { BasicComponent } from './basic/basic.component';

const routes: Routes = [
  {
    path: '',
    component: BasicComponent
  },
  {
    path: 'nested',
    component: NestedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
