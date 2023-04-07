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
	(response) => { this.posts = response; },
	(error) => { console.log(error); });
}

}