import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { DrugComponent } from './drug/drug.component';
import { CaregiverComponent } from './caregiver/caregiver.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NotFoundComponent } from './not-found/not-found.component';

import {Router, RouterModule, Routes} from "@angular/router";
import { FormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./login/login.component";

const appRoutes : Routes = [
    {
      path:"notes" /**referes to the url that we will have to type in the browser*/,
      component: DoctorComponent /** the component that will be rendered when the url (path) is hit*
                        ex http:/localhost:4200/notes    -> render the notes component        */
    },
    {
      path:"feedback",
      component:FeedbackComponent
    },
    {
      path:"drug",
      component:DrugComponent
    },
    {
      path:"patient",
      component:PatientComponent
    },
    {
      path: "caregiver",
      component: CaregiverComponent
    },
    {
      path:"doctor",
      component:DoctorComponent
    },
    {
      path:"",
      component:LoginComponent
    }

  ];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DoctorComponent,
    PatientComponent,
    DrugComponent,
    CaregiverComponent,
    FeedbackComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true}) /** imported the list of routes defined above */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

