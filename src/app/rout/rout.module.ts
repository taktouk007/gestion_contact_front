import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { NewContactComponent } from '../new-contact/new-contact.component';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';
import { AppComponent } from '../app.component';
const appRoutes: Routes = [
  { path : 'contacts', component : ContactListComponent},
  { path : 'newContact', component : NewContactComponent},
  { path : 'detail/:id', component: ContactDetailComponent}
 // { path : 'home', component: AppComponent },
  //{ path : '*', redirectTo: 'home'}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports : [
    RouterModule
  ]
})
export class RoutModule { }
