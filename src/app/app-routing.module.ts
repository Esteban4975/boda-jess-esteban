import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuestraBodaComponent } from './nuestra-boda/nuestra-boda.component';

const routes: Routes = [
  {path:'Boda', component: NuestraBodaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
