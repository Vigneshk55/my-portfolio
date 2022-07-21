import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSectionComponent } from './sections/home-section/home-section.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path : 'home', component : HomeSectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
