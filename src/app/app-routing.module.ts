import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddComputerComponent } from './components/add-computer/add-computer.component';
import { EditComputerComponent } from './components/edit-computer/edit-computer.component';
import { DetailComputerComponent } from './components/detail-computer/detail-computer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'add', component: AddComputerComponent},
  {path: 'edit/:id', component: EditComputerComponent},
  {path: 'computer/:id', component: DetailComputerComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
