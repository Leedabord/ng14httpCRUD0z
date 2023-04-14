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

constructor(private httpService: HttpService) { }

ngOnInit() {
	this.httpService.getPosts().subscribe(
	(response) => { this.posts = response; 
    console.log("tempfn 1", this.posts);
//   this.tempfn(); 
},
	(error) => { console.log(error); });
}  // ** end_ ngOnInit

tempfn() {
  console.log("tempfn", this.posts);

//  for (let ii = 0; ii < this.posts.records.length; ii++) {
//  }

}  // ** end_ tempfn

}