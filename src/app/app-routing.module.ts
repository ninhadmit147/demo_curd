import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './component/add/add.component';
import { EditComponent } from './component/edit/edit.component';
import { ListComponent } from './component/list/list.component';

const routes: Routes = [
  { path: "add", component: AddComponent },
  { path: "update/:id", component: EditComponent },
  { path: "", component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
