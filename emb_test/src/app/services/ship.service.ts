import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Rocket, Ship } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class ShipService {
  constructor(private apollo: Apollo) {}

  public getShipById(offset: number, shipId: number) :Observable<Ship>{
    return this.apollo
      .watchQuery<Rocket>({
        query: gql`
          query Query($offset: Int) {
            launchesPast(limit: 1, offset: $offset) {
              ships {
                name
                home_port
                type
                weight_kg
                year_built
                id
              }
            }
          }
        `,
        variables: {
          offset: offset,
          shipId:shipId
        },
      })
      .valueChanges.pipe(map((result: any) => result.data.launchesPast[0].ships[0]));
  }
}
