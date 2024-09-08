import { Component } from '@angular/core';
import { HttpService } from './students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang14-material-ui-crud';

posts : any;  

constructor(private httpSvc: HttpService) { }

ngOnInit() {

  this.posts = this.httpSvc.getAllRecs();  
  console.log("tempfn 1", this.posts);
  this.tempfn();

}  // ** end_ ngOnInit

tempfn() {
  console.log("tempfn", this.posts);

//  for (let ii = 0; ii < this.posts.records.length; ii++) {
//  }

}  // ** end_ tempfn

}