import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HomeComponent } from './home/home.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { RoutingModule, routingComponents } from './routing/routing.module';
import { AgmCoreModule } from '@agm/core';
import { AuthGuardService } from './_guards/auth-guard.service';
import { MapComponent } from './map/map.component';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapService } from './_services/map.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, routingComponents, MapComponent],
  imports: [
    BrowserModule,
    RouterModule,
    RoutingModule,
    LoginModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBL-IcijcD23KaQFjzDyAHaJPd_GfkDCy4',
      libraries: ['places'],
    }),
    FormsModule,
    ReactiveFormsModule,
    AgmSnazzyInfoWindowModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [AuthGuardService, MapService],
  bootstrap: [AppComponent],
})
export class AppModule {}
