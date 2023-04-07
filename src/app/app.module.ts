import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AllStudentsComponent } from './all-students/all-students.component';
// import { AddStudentComponent } from './add-student/add-student.component';
// import { EditStudentComponent } from './edit-student/edit-student.component';
// import { DeleteDialogStudentComponent } from './delete-dialog-student/delete-dialog-student.component';

// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/shareReplay';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/catch';

// import 'rxjs/add/observable/forkJoin';
// import 'rxjs/add/observable/of';
// import {AuthInterceptor} from "./auth-interceptor";

@NgModule({
  declarations: [AppComponent, AllStudentsComponent, 
    // AddStudentComponent, EditStudentComponent, DeleteDialogStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [
    [ { provide: HTTP_INTERCEPTORS, 
      // useClass: AuthInterceptor, multi: true 
    } ]
  ],
bootstrap: [AppComponent],
})
export class AppModule {}
