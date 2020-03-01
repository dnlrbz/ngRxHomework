import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './resorts-widget/resort-info-detail/weather/weather.component';
import { SocialInfoComponent } from './resorts-widget/resort-info-detail/social-info/social-info.component';
import { ResortInfoDetailComponent } from './resorts-widget/resort-info-detail/resort-info-detail.component';
import { ResortsWidgetComponent } from './resorts-widget/resorts-widget.component';
import { FooterComponent } from './resorts-widget/footer/footer.component';
import { ResortInfoBriefComponent } from './resorts-widget/resort-list/resort-info-brief/resort-info-brief.component';
import { TelephonePipe } from './shared/pipes/telephone.pipe';
import { TemperatureComponent } from './resorts-widget/resort-info-detail/weather/temperature/temperature.component';
import { ImgUrlPipe } from './shared/pipes/imgUrl.pipe';
import { ResortListComponent } from './resorts-widget/resort-list/resort-list.component';
import {StoreModule} from '@ngrx/store';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {reducer} from './store/reducers/resorts.reducer';
import {ResortEffects} from './store/effects/resort.effects';
import {EffectsModule} from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule, MatSpinner} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SocialInfoComponent,
    ResortInfoDetailComponent,
    ResortsWidgetComponent,
    FooterComponent,
    ResortInfoBriefComponent,
    TelephonePipe,
    TemperatureComponent,
    ImgUrlPipe,
    ResortListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([ResortEffects]),
    StoreModule.forRoot({resortReducer: reducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    ResortEffects
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
