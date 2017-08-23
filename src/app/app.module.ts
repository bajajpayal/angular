import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import {  AppRoutingModule } from './app-routing.module';
import { Header1Component }   from './header1/header1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ApppComponent } from './app1.component';
import { LocalStorageModule } from 'angular-2-local-storage';

import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index1/index1.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { LearnMoreComponent } from './learnmore/learnmore.component';
import {Collapse} from './main/collapse.component';
import { AboutComponent }   from './about/about.component';
import { AboutUsComponent }   from './about/aboutus/aboutus.component';
import { LeaderShipComponent }   from './about/leadership/leadership.component';
import { CareersComponent }   from './about/careers/careers.component';
import { TestimonalsComponent }   from './about/testimonals/testimonals.component';
import { LocationComponent } from './about/locations/location.component';
import { PressComponent } from './about/press/press.component';
import { ContactUsComponent }   from './about/contactus/contactus.component';
import { FaqComponent }   from './faq/faq.component';
import { PackagesComponent }   from './packages/packages.component';
import { JoinOurTeamComponent }   from './about/joinourteam/joinourteam.component';
import { CSSCarouselComponent } from './car/car.component';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { HeroDetailComponent } from './hero-detail.component'; // <-- #1 import component
import { HeroListComponent }   from './hero-list.component';
import { HeroService }         from './hero.service'; //  <-- #1 import service
import { CheckoutComponent } from './checkout/checkout.component';
import { StepOneComponent } from './checkout/stepone/stepone.component';
import { StepTwoComponent } from './checkout/steptwo/steptwo.component';
import { StepThreeComponent } from './checkout/stepthree/stepthree.component';
import { StepFourComponent } from './checkout/stepfour/stepfour.component';
import { AccountComponent } from './checkout/account/account.component';
import {ModalComponent} from './modal.component';




@NgModule({
  declarations: [
    AppComponent,
    ApppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LearnMoreComponent,
    AboutComponent,
    AboutUsComponent,
    LeaderShipComponent,
    CareersComponent,
    PressComponent,
    TestimonalsComponent,
    LocationComponent,
    ContactUsComponent,
    FaqComponent,
    PackagesComponent,
    JoinOurTeamComponent,
    CSSCarouselComponent,
    Header1Component,
     HeroDetailComponent,
    HeroListComponent,
    IndexComponent,
    CheckoutComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    AccountComponent,
    ModalComponent,
    Collapse
   
     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     BrowserAnimationsModule, 
     ReactiveFormsModule,
      AppRoutingModule,
      LocalStorageModule.withConfig({
            prefix: 'app-root',
            storageType: 'localStorage'
        })
  ],
   exports: [ // export for the DemoModule
    AppComponent,
    HeroDetailComponent,
    HeroListComponent
  ],
   providers: [ HeroService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
