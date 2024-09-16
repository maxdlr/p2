import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Olympic } from '../models/Olympic';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<Olympic[]>([]);

  constructor(private http: HttpClient) {}

  loadInitialData() {
    return this.http.get<Olympic[]>(this.olympicUrl).pipe(
      tap((value) => this.olympics$.next(value)),
      catchError((error, caught) => {
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
      for (const olympic of value) {
        if (olympic.country === name) {
          foundOlympic = olympic;
        }
      }
    });

    return foundOlympic;
  }

  getOlympicById(id: number): Olympic | null {
    this.olympics$.subscribe((value): Olympic | null => {
      for (const olympic of value) {
        if (String(olympic.id) == String(id)) {
          return olympic;
        }
      }
      return null;
    });
    return null;
  }
}
