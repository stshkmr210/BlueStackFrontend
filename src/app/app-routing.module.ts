import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopAppComponent } from './top-app/top-app.component';
import { DetailPageComponent } from './detail-page/detail-page.component';


const routes: Routes = [
  { path : 'top', component : TopAppComponent },
  { path : '', component : TopAppComponent },
  { path : 'app-details', component : DetailPageComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
