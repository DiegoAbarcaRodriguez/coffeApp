import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, catchError, of, tap, throwError } from 'rxjs';
import { Coffee } from '../interfaces/coffee.interface';
import { environment } from 'environments/environment';

@Injectable({ providedIn: 'root' })
export class CoffeeService {

    private _mustShowAllCoffees: Subject<boolean> = new Subject();

    constructor(private httpClient: HttpClient) { }



    public getCoffees(): Observable<Coffee[]> {
        return this.httpClient.get<Coffee[]>(`${environment.url}/coffees`)
            .pipe(
                catchError(() => of([]))
            );

    }

    get mustShowAllCoffees(): Subject<boolean> {
        return this._mustShowAllCoffees;
    }

    onMustShowAllCoffees(): Observable<boolean> {
        return this._mustShowAllCoffees.asObservable();
    }




}