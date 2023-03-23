import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeSearchComponent } from './cards/search/employee-search/employee-search.component';
import { EmployeeMaintenanceComponent } from './cards/maintenance/employee-maintenance/employee-maintenance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorPipe } from 'src/app/pipes/error.pipe';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent
  },
  {
    path: 'search',
    component: EmployeeSearchComponent
  },
  {
    path: 'maintenance',
    component: EmployeeMaintenanceComponent
  },
  {
    path: 'maintenance/:id',
    component: EmployeeMaintenanceComponent
  },
]

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeSearchComponent,
    EmployeeMaintenanceComponent,

    ErrorPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    HttpClientModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatTableModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatChipsModule,

    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class EmployeeModule { }
