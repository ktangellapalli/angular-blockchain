import { Routes } from '@angular/router';
import { AuthenticationGuard } from 'microsoft-adal-angular6';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { HyperledgerComponent } from '../../hyperledger/hyperledger.component';
import { EthereumComponent } from '../../ethereum/ethereum.component';
import { ArchitectureComponent } from '../../architecture/architecture.component';
import { WhitepapersComponent } from '../../whitepapers/whitepapers.component';
import { ReferencesComponent } from '../../references/references.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent , canActivate: [AuthenticationGuard] },
    { path: 'hyperledger', component: HyperledgerComponent, canActivate: [AuthenticationGuard] },
    { path: 'ethereum', component: EthereumComponent, canActivate: [AuthenticationGuard] },
    { path: 'architecture', component: ArchitectureComponent, canActivate: [AuthenticationGuard] },
    { path: 'whitepapers', component: WhitepapersComponent, canActivate: [AuthenticationGuard] },
    { path: 'references', component: ReferencesComponent, canActivate: [AuthenticationGuard] }
];
