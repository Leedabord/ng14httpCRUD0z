import { Injectable } from '@angular/core';
import { Student } from './student';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { tap, map, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private message = new BehaviorSubject('First Message');
  sharedMessage = this.message.asObservable();

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
  private lastId: number = 20;

  constructor(private httpC: HttpClient) { }

  nextMessage(message: string) {
    this.message.next(message)
  }

  public rdbGet(): Observable<any> {
    return this.httpC.get<any>(this.rdbURL, this.httpOptions);
  }

  public rdbDel() { 
    var delURL = this.rdbURL + '/5f6ab12510feee5100017131';
    this.httpC.delete(delURL, this.httpOptions)
    .subscribe({
        next: data => {
            this.status = 'Delete successful';
            console.log(this.status);
        },
        error: error => {
            this.status = error.message;
            console.error('Err Deleting:: ', this.status);
        }
    });
  }

/*
  getContacts(): Observable<Student[]> {
    if (this.contacts) {
      return of(this.contacts);
    } else {
      // fetch contacts
      return this.httpC.get<Student[]>('./assets/contacts.json')
      .pipe(tap(contacts => this.contacts = contacts));
    }
  }

  getContactsByCategory(category: string): Observable<Student[]> {
    return this.getContacts().pipe(map(contacts => contacts.filter(contact => contact.category == category)));
  }

  getContactById(id: number): Observable<Student> {
    return this.getContacts().pipe(map(contacts => contacts.find(contact => contact.id == id)));
  }

  createContact(contact: Student) {
    contact.id = this.lastId + 1;
    // increment lastId value
    this.lastId = this.lastId + 1;
    this.contacts.push(contact);
  }

  updateContact(contact: Student): Student {
    let itemIndex = this.contacts.findIndex(item => item.id == contact.id);
    this.contacts[itemIndex] = contact;
    return contact;
  }

  deleteContact(id: number): Student {
    let itemIndex = this.contacts.findIndex(item => item.id == id);
    return this.contacts.splice(itemIndex, 1)[0];
  }
*/

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

}