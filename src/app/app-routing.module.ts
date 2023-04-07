import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AddStudentComponent } from './add-student/add-student.component';
// import { AllStudentsComponent } from './all-students/all-students.component';
//import { EditStudentComponent } from './edit-student/edit-student.component';

const routes: Routes = [
  {
    path: '',
    component: AllStudentsComponent,
  },
  {
    path: 'add-student',
    component: AllStudentsComponent,
//    component: AddStudentComponent,
  },
  {
    path: 'edit-student/:id',
    component: AllStudentsComponent,
//    component: EditStudentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
