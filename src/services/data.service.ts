import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { IPlace } from '../interfaces/place.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public selectedOptions: any = [];

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'x-api-version': '2'
    })
  };

  public selectedLocations(options: any) {
    this.selectedOptions = options;
  }

  public getLocationData(rating: string, authority: string) {
    return this.http
      .get(
        `http://api.ratings.food.gov.uk/Establishments?RatingKey=${rating}&localAuthorityId=${authority}`,
        { headers: this.httpOptions.headers }
      )
      .pipe(
        map(resData => {
          const places = [];
          const establishments = (resData as any).establishments;
          establishments.forEach(element => {
            const data: IPlace = {
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
