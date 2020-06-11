//core
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserTicketsComponent } from './user-tickets/user-tickets.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
  { path: 'userdetail', component: UserDetailsComponent, },
  { path: 'ticketdetail', component: UserTicketsComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  // { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
