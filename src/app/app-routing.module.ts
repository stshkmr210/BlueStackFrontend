import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopAppComponent } from './top-app/top-app.component';


const routes: Routes = [{ path : 'top', component : TopAppComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
