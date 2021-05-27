import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { StocksComponent } from './stocks/stocks.component';
import { RentComponent } from './rent/rent.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewRentalComponent } from './new-rental/new-rental.component';
import { BillingComponent } from './billing/billing.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'stocks', component: StocksComponent },
  { path: 'rent', component: RentComponent },
  { path: 'newUser', component: NewUserComponent },
  { path: 'newRental', component: NewRentalComponent },
  { path: 'billing/:rentalId', component: BillingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
