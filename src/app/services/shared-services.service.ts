import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationMenu } from '../interface/navigation.types';
const NAV_URL = './assets/data/nav_db.json';


@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {

  constructor(private http:HttpClient) { }

  getMainNavigation(): Observable<NavigationMenu[]> {
    return this.http.get<NavigationMenu[]>(NAV_URL);


  }
}
