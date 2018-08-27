import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { HyperledgerComponent } from '../../hyperledger/hyperledger.component';
import { EthereumComponent } from '../../ethereum/ethereum.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'hyperledger', component: HyperledgerComponent },
    { path: 'ethereum', component: EthereumComponent }
];
