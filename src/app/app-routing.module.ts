import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStudentsComponent } from './all-students/all-students.component';
// import { AddStudentComponent } from './add-student/add-student.component';
// import { EditStudentComponent } from './edit-student/edit-student.component';

// const resultsModule = () => import('./results/results.module').then(x => x.ResultsModule);
//    { path: 'results', loadChildren: resultsModule },

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

// otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
