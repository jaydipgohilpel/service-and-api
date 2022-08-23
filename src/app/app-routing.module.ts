import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MobileSingleRecordComponent} from './mobile-single-record/mobile-single-record.component'
const routes: Routes = [
  {path: 'mobile/:id', component: MobileSingleRecordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
