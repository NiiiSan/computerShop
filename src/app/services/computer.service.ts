import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Computer } from '../models/computer';
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  marqueDispo = ["Apple", "Dell", "HP", "Asus"];
  typeDispo = ["Portable", "PC Fixe", "Tablette Hybride"];
  categoriesDispo = ["Bureautique", "Gaming", "1er Prix"];
  urlApi = 'http://localhost:3000/computer';

  constructor(private httpClient: HttpClient) { }

  add(computer: Computer): Observable<Computer> {
    computer.dateEntreeMagasin = new Date();
    return this.httpClient.post<Computer>(this.urlApi, computer).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getAll(): Observable<Computer[]> {
    return this.httpClient.get<Computer[]>(this.urlApi).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getById(id: number): Observable<Computer> {
    return this.httpClient.get<Computer>(this.urlApi + '/' + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  remove(computer: Computer): Observable<Computer> {
    return this.httpClient.delete<Computer>(this.urlApi + '/' + computer.id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  editComputer(computer: Computer): Observable<Computer> {
    return this.httpClient.put<Computer>(this.urlApi + '/' + computer.id, computer).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
