import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTileComponent } from './create-tile/create-tile.component';
import { EditTileComponent } from './edit-tile/edit-tile.component';
import { ListTileComponent } from './list-tile/list-tile.component';

const routes: Routes = [
  { path: '', redirectTo: '/create', pathMatch: 'full' },
  { path: 'create', component: CreateTileComponent },
  { path: 'list-tile', component: ListTileComponent },
  { path: 'update-tile/:id', component: EditTileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
