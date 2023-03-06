import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms' ;
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field' ;
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon' ;
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

import { AccordionModule } from '@coreui/angular';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SwiperModule } from 'swiper/angular' ;
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { PolicyComponent } from './components/common/policy/policy.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WalletconnComponent } from './components/common/walletconn/walletconn.component';
import { MobileMenuComponent } from './components/layouts/header/mobile-menu/mobile-menu.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { ButtonComponent } from './shared/ui/button/button.component';
import { TopBannerComponent } from './shared/components/top-banner/top-banner.component';
import { GenericBannerComponent } from './shared/components/generic-banner/generic-banner.component';
import { OptionsComponent } from './components/marketplace/options/options.component';
import { GraphComponent } from './components/marketplace/graph/graph.component';
import { ExplainComponent } from './components/marketplace/explain/explain.component';
import { ExplainCardComponent } from './components/marketplace/explain/explain-card/explain-card.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogCardComponent } from './components/blog/blog-card/blog-card.component';
import { BlogSmallCardComponent } from './components/blog/blog-small-card/blog-small-card.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from './redux/reducers';
import { EffectsModule } from '@ngrx/effects';
import { TestComponent } from './test/test.component';
// import { BlogEffects } from './redux/effects/blog.effect';

export class MaterialModule {};

@NgModule({
  declarations: [
    AppComponent,
    PolicyComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    WalletconnComponent,
    MobileMenuComponent,
    MarketplaceComponent,
    ButtonComponent,
    TopBannerComponent,
    GenericBannerComponent,
    OptionsComponent,
    GraphComponent,
    ExplainComponent,
    ExplainCardComponent,
    BlogComponent,
    BlogCardComponent,
    BlogSmallCardComponent,
    TestComponent
  ],
  imports: [
    MatSliderModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatGridListModule,

    FlexLayoutModule,

    SwiperModule,
    NgxSkeletonLoaderModule,

    AccordionModule,

    FormsModule,
    ReactiveFormsModule,

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
