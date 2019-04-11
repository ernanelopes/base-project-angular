import { Observable } from 'rxjs';

export interface IServiceBase<T> {
    get(): Observable<any>;
    getById(id: number): Observable<T>;
    add(record: T): Observable<T>;
    update(record: T): Observable<T>;
    remove(id: number): void;
}
