import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

import { IModelBase } from '../interfaces/IModelBase';
import { IServiceBase } from '../interfaces/IServiceBase';

export class ServiceBase<T extends IModelBase> implements IServiceBase<T> {

  public url: string;

  constructor(protected http: HttpClient, private API_URL: string) {
    this.url = API_URL;
  }

  get() {
    return this.http.get<T[]>(this.API_URL)
      .pipe(
        take(1)
      );
  }

  getById(id: number) {
    return this.http.get<T>(`${this.API_URL}/${id}`)
      .pipe(
        take(1)
      );
  }

  remove(id: number) {
    this.http.delete(`${this.API_URL}/${id}`);
  }

  add(record: T) {
    return this.http.post<T>(`${this.API_URL}`, record)
      .pipe(
        take(1)
      );
  }

  update(record: T) {
    return this.http.put<T>(`${this.API_URL}/${record.id}`, record)
      .pipe(
        take(1)
      );
  }

  handleError(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
