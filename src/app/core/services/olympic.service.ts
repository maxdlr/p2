import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Olympic } from '../models/Olympic';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<Olympic[]>([]);

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
  ) {}

  loadInitialData() {
    return this.http.get<Olympic[]>(this.olympicUrl).pipe(
      tap((value) => this.olympics$.next(value)),
      catchError((error, caught) => {
        this.toastr.error('Error', error.message);
        console.error(error);
        alert('Cannot get Olympics: ' + error);
        this.olympics$.next([]);
        return caught;
      }),
    );
  }

  getOlympics() {
    return this.olympics$.asObservable();
  }

  getOlympicByName(name: string): Olympic | null {
    let foundOlympic!: Olympic | null;

    this.olympics$.subscribe((value) => {
      foundOlympic = value.filter(
        (olympic: Olympic) => olympic.country === name,
      )[0];
    });

    return foundOlympic;
  }
}
