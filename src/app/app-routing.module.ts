import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './sections/main/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'portfolio', pathMatch: 'full'},
  {path : 'home', component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
