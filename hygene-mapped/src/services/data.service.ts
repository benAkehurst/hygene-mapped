import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';

import { Place } from '../models/place.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'x-api-version': '2'
    })
  };

  public getLocationData() {
    return this.http
      .get(
        'http://api.ratings.food.gov.uk/Establishments?RatingKey=1&localAuthorityId=89',
        { headers: this.httpOptions.headers }
      )
      .pipe(
        map(resData => {
          const places = [];
          resData.establishments.forEach(element => {
            const data: Place = {
              name: element.BusinessName,
              type: element.BusinessType,
              address: element.AddressLine1,
              postCode: element.PostCode,
              phone: element.Phone,
              ratingValue: element.RatingValue,
              score: element.scores,
              geocode: element.geocode,
              link: element.links[0].href
            };
            places.push(data);
          });
          return places;
        })
      );
  }
}
