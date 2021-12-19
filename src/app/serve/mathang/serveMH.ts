import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class ServeMH{
// https://backend-mongoo.herokuapp.com/NV
  URL=`${environment.baseURL}/MH`;
  constructor(private http:HttpClient) {}
  private _refresh$ = new Subject<void>();

  get refresh$(){
    return this._refresh$;
  }
  get():Observable<any>{
    return this.http.get<any>(
      `${this.URL}/`
    );
  }
  insert(mh):Observable<any>{
    return this.http.post<any>(
      `${this.URL}`,mh
    ).pipe(
      tap(() =>{this._refresh$.next();}));
  }
update (id,mh): Observable<any>{
  return this.http.put<any>(`${this.URL}/${id}`,mh).pipe(
          tap(() => {
            this._refresh$.next();
          })
        );
}
  delete(id): Observable<any> {
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }
}

  

