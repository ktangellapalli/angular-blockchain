import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ParticlesModule } from 'angular-particle';
import { EmbedVideo } from 'ngx-embed-video';
import { LightboxModule } from 'ngx-lightbox';
import { AuthenticationGuard, MsAdalAngular6Module } from 'microsoft-adal-angular6';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MsAdalAngular6Module.forRoot({
    tenant: 'e1c5d9ee-a951-451e-8432-642c23d40071',
    clientId: '256b30f8-32fb-427a-83ec-6fa6f854a9d5',
    redirectUri: window.location.origin,
    navigateToLoginRequestUrl: false,
    cacheLocation: 'localStorage',
  }),
    ParticlesModule,
    EmbedVideo.forRoot(),
    LightboxModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
