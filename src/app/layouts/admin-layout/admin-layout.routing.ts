import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { HyperledgerComponent } from '../../hyperledger/hyperledger.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'hyperledger',      component: HyperledgerComponent },
];
