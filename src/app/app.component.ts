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
mm: { ev:" ", w$:0, sk:0, b1:0, b2:0, 
  tm: [ nm:"", w$:0, sk:0, b1:0, b2:0, f9:0, b9:0, r18:0, 
    h: { w$:0, sk:0, b1:0, b2:0, sc:8, p:4, hc:1 }
  ]
};
constructor(private httpService: HttpService) { }

ngOnInit() {
	this.httpService.getPosts().subscribe(
	(response) => { this.posts = response; this.tempfn(); },
	(error) => { console.log(error); });
}  // ** end_ ngOnInit

tempfn() {
  console.log("tempfn", this.posts);

  for (let ii = 0; ii < this.posts.records.length; ii++) {

  }

}  // ** end_ tempfn

}