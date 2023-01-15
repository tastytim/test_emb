import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Rocket } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class RocketsService {
  constructor(private apollo: Apollo) {}

  public getAllRockets(offset:number):Observable<Rocket> {
    return this.apollo
      .watchQuery<Rocket>({
        query: gql`
          query Query($offset:Int) {
            launchesPast(limit: 1, offset: $offset) {
             id
              mission_name
              ships {
                name
                home_port
                type
                id
              }
            }
          }
        `,
        variables:{
          offset:offset
        }
      })
      .valueChanges.pipe(map((result: any) => result.data.launchesPast[0]));
  }


}
