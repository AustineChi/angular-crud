import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

 getRequest<T>(url: string, options?: any):Observable<any>{
  return this.http.get<T>(`${environment.baseUrl}/${url}`, options)
  .pipe(
    retry(3), 
    catchError(this.handleError)
  );

}

postRequest<T>(url: string, body: any, options?:any ):Observable<any>{
  return this.http.post<T>(`${environment.baseUrl}/${url}`, body, options )  
  .pipe(
    catchError(this.handleError)
  );
}

updateRequest<T>(url: string, body: any, options?:any ):Observable<any>{
  return this.http.post<T>(`${environment.baseUrl}/${url}`, body, options ).pipe(
    catchError(this.handleError)
  );
}

deleteRequest<T>(url: string, options?:any ):Observable<any>{
  return this.http
    .delete<T>(`${environment.baseUrl}/${url}`, options)
    .pipe(catchError(this.handleError));
}


 handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(
    'Something bad happened; please try again later.');
}


}
