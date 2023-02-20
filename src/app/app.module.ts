import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './modules/user/module/header/components/header.component';
import { CoursesComponent } from './modules/user/module/courses/components/courses.component';
import { ProgramsComponent } from './modules/user/module/programs/components/programs.component';
import { TeachersComponent } from './modules/user/module/teachers/components/teachers.component';
import { StudentsComponent } from './modules/user/module/students/components/students.component';
import { BatchComponent } from './modules/user/module/batch/components/batch.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';


import { RouterModule, Routes } from '@angular/router';

const appRoute: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CoursesComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    CoursesComponent,
    ProgramsComponent,
    TeachersComponent,
    StudentsComponent,
    BatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule]  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
