import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent }   from './main/main.component';
import { ApppComponent } from './app1.component';
import { Header1Component }   from './header1/header1.component';
import { LearnMoreComponent }   from './learnmore/learnmore.component';
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
import { IndexComponent } from './index1/index1.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StepOneComponent } from './checkout/stepone/stepone.component';
import { AccountComponent } from './checkout/account/account.component';
import { StepTwoComponent } from './checkout/steptwo/steptwo.component';
import { StepThreeComponent } from './checkout/stepthree/stepthree.component';
import { StepFourComponent } from './checkout/stepfour/stepfour.component';

const routes: Routes = [
  { path: '', redirectTo: '/index1/main', pathMatch: 'full' },
  { path: 'app',  component: ApppComponent },
  { path: 'index1',  component: IndexComponent ,
  children:[
    { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main',  component: MainComponent },
   { path: 'car',  component: CSSCarouselComponent },
  
  { path: 'learnmore',  component: LearnMoreComponent },
  { path: 'location',  component: LocationComponent },
  { path: 'faq',  component: FaqComponent },
   { path: 'packages',  component: PackagesComponent },
  {path: 'about',  component: AboutComponent,
     children: [
    { path: '', redirectTo: 'aboutus', pathMatch: 'full' },
    { path: 'aboutus', component:AboutUsComponent },
    { path: 'leadership', component:LeaderShipComponent },
    { path: 'careers', component:CareersComponent },
    { path: 'testimonals', component:TestimonalsComponent},
    { path: 'press', component:PressComponent},
    { path: 'contactus', component:ContactUsComponent},
    { path: 'joinourteam', component:JoinOurTeamComponent}  
            
     ]  
  }
  ]
},
  { path: 'checkout', component:CheckoutComponent,
   children: [
    { path: '', redirectTo: 'stepone', pathMatch: 'full' },
    { path: 'stepone', component:StepOneComponent },
    { path: 'steptwo', component:StepTwoComponent },
    { path: 'stepthree', component:StepThreeComponent },
    { path: 'stepfour', component:StepFourComponent }, 
    { path: 'account', component:AccountComponent } 
    ] },

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
    
}