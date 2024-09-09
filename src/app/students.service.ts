import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class HttpService {  

//  public aaposts: [];
public status = "null";

readonly rdbURL = 
'https://api.airtable.com/v0/app0hohtq4b1nM0Kb/Issues';

// 'https://gwfl-256d.restdb.io/rest/utility';
// 'https://api.airtable.com/v0/app0hohtq4b1nM0Kb/Scores?api_key=key66fQg5IghIIQmb';

httpOptions = {
 headers: new HttpHeaders({
   'Content-Type': 'application/json',
   'Authorization': 'Bearer patgbCJgQnURgkXpI.f72c7c10a614e68e2ba92c6e7a437e64312719fe9ad7f7c38b05164dfe445a32'
  // 'x-apikey': '5821f61550e9b39131fe1b6f'  
   // 569a2b87566759cf4b984a50'  // 5821f61550e9b39131fe1b6f
 })
}

//  private contacts: Student[];
// private lastId: number = 20;
// constructor(private httpC: HttpClient) { }
/* nextMessage(message: string) {
 this.message.next(message)
}  */

public rdbGet(): Observable<any> {
 return this.http.get(this.rdbURL, this.httpOptions);
}

  private url = 
  'https://api.airtable.com/v0/app0hohtq4b1nM0Kb/Issues?api_key=key66fQg5IghIIQmb';
//  'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts';
  
  constructor(private http: HttpClient) {}
  
  public getAllRecs(): Observable<any> {

    let getRecs = this.http.get(this.rdbURL, this.httpOptions);

    const mm = { ev:" ", w$:0, sk:0, b1:0, b2:0, 
      tm: [ { nm:"", w$:0, sk:0, b1:0, b2:0, f9:0, b9:0, r18:0, 
      h: { w$:0, sk:0, b1:0, b2:0, sc:8, p:4, hc:1 } }
      ] }; 
    console.log("getRecs:: ", getRecs);

//    return this.http.get<any>(this.rdbURL, this.httpOptions);
    return getRecs;
  }

  getPosts() {
    let getRecs = this.http.get<any>(this.rdbURL, this.httpOptions);
    const mm = { ev:" ", w$:0, sk:0, b1:0, b2:0, 
    tm: [ { nm:"", w$:0, sk:0, b1:0, b2:0, f9:0, b9:0, r18:0, 
    h: { w$:0, sk:0, b1:0, b2:0, sc:8, p:4, hc:1 } }
  ] }; 
  console.log(getRecs);

  return getRecs;
  // return this.http.get(this.url);

  }

}

/**  'https://api.airtable.com/v0/app0hohtq4b1nM0Kb/Students?api_key=key66fQg5IghIIQmb');

  (async () => {
    // GET request using fetch with async/await
    const response = await fetch(
        'https://api.airtable.com/v0/app0hohtq4b1nM0Kb/Scores?api_key=key66fQg5IghIIQmb'
//        'https://reqres.in/api/users'
  );
  const data = await response.json();
  })();

  get(): Observable<Student[]> {
    return this.httpClient.get<Student[]>('http://localhost:3000/students');
  }

  create(payload: Student) {
    return this.httpClient.get<Student[]>(
      'https://api.airtable.com/v0/app0hohtq4b1nM0Kb/Students?api_key=key66fQg5IghIIQmb'),
      payload
    );
  }

  getById(id: number): Observable<Student> {
   return this.httpClient.get<Student>(`http://localhost:3000/students/${id}`);
  }

  update(payload: Student): Observable<Student> {
    return this.httpClient.put<Student>(
      `http://localhost:3000/students/${payload.id}`,
      payload
    );
  }

  delete(id: number) {
    return this.httpClient.delete(`http://localhost:3000/students/${id}`);
  }
**/
