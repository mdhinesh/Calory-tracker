import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  GoogleLoginProvider
} from '@abacritt/angularx-social-login';

import { GoogleSigninButtDirective } from '../app/auth/google-signin-butt.directive';

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';

import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbCardModule, NbMenuModule, NbIconModule } from '@nebular/theme';
import { NbSidebarService } from '@nebular/theme';
import { NbIconLibraries, NbInputModule,NbButtonModule, NbListModule, NbUserModule, NbAccordionModule, NbTooltipModule } from '@nebular/theme';

import { AppFoodListComponent } from './app-food-list/app-food-list.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './shared/search-input.pipe';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatExpansionModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(), // Import NbSidebarModule and call forRoot()
    NbCardModule,
    NbMenuModule.forRoot(),
    NbIconModule, // Import NbIconModule and call forRoot()
    FormsModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    NbListModule,
    NbUserModule,
    NbAccordionModule,
    NbTooltipModule
  ],
  declarations: [
    AppComponent,
    GoogleSigninButtDirective,
    AppFoodListComponent,
    SearchPipe
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1000903764967-3s33fatcr8ugbt27hc9r6230rc0m50cm.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    NbSidebarService,
  ],
  bootstrap: [AppComponent],
  exports: [
    SearchPipe
  ]
})
export class AppModule { 
  constructor(private iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerFontPack('eva', { packClass: 'eva-icons', iconClassPrefix: 'eva' });
  }
}