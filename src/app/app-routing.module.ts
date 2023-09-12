import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NestedComponent } from './nested/nested.component';
import { BasicComponent } from './basic/basic.component';
import { ArrayComponent } from './array/array.component';

const routes: Routes = [
  {
    path: '',
    component: BasicComponent
  },
  {
    path: 'nested',
    component: NestedComponent
  },
  {
    path: 'array',
    component: ArrayComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
