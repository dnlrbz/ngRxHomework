import {Injectable} from '@angular/core';
import {requestResorts, requestResortsSuccessful} from '../actions/resort.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import { DataService } from '../../shared/services/data.service';
import {EMPTY} from 'rxjs';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {IResortInfo} from '../../shared/model/resortInfo';

@Injectable()
export class ResortEffects {
  constructor(private actions: Actions, private dataService: DataService) {}

  loadResorts$ = createEffect(() =>
    this.actions.pipe(
      ofType(requestResorts),
        mergeMap(() => this.dataService.getResorts()
          .pipe(
            map((resorts: IResortInfo[]) => requestResortsSuccessful({newResorts: resorts})),
            catchError(() => {
              console.log('error');
              return EMPTY;
            })
          ))
    )
  );
}
