import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDividerModule,
  MATERIAL_SANITY_CHECKS,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatMenuModule,
    MatIconModule, MatCardModule,
    MatFormFieldModule, MatSelectModule,
    MatInputModule, MatDividerModule, MatNativeDateModule,
    MatDatepickerModule, MatSidenavModule
  ],
  declarations: [],
  providers: [{provide: MATERIAL_SANITY_CHECKS, useValue: false}],
  exports: [
    MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatMenuModule,
    MatIconModule, MatCardModule,
    MatFormFieldModule, MatSelectModule,
    MatInputModule, MatDividerModule, MatNativeDateModule,
    MatDatepickerModule, MatSidenavModule
  ]
})
export class MaterialModule {
}
