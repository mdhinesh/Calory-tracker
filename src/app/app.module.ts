import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { FoodListComponent } from './food-list/food-list.component';
import { SearchComponent } from './search/search.component';

import { ProductService } from './services/list.service';
import { SearchResultComponent } from './search-result/search-result.component';
import { ExpertrecSearchComponent } from './expertrec-search/expertrec-search.component';


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
    NbTooltipModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    GoogleSigninButtDirective,
    HeaderComponent,
    SidebarComponent,
    AddFoodComponent,
    FoodListComponent,
    SearchComponent,
    SearchResultComponent,
    ExpertrecSearchComponent,
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
    ProductService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { 
  constructor(private iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerFontPack('eva', { packClass: 'eva-icons', iconClassPrefix: 'eva' });
  }
}