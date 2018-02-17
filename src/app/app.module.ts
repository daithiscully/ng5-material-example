import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {
  MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatToolbarModule, MatCardModule,
  MATERIAL_SANITY_CHECKS, MatFormFieldModule, MatSelectModule, MatInputModule, MatDividerModule, ShowOnDirtyErrorStateMatcher,
  ErrorStateMatcher
} from '@angular/material';
import {NavbarComponent} from './navbar/navbar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatMenuModule,
    MatIconModule, MatCardModule,
    MatFormFieldModule, MatSelectModule,
    MatInputModule, MatDividerModule
  ],
  providers: [{provide: MATERIAL_SANITY_CHECKS, useValue: false}, {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
