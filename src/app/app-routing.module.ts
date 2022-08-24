import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileSingleRecordComponent } from './mobile-single-record/mobile-single-record.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'singleMobileRecord', component: MobileSingleRecordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
