import {createAction, props} from '@ngrx/store';
import {IResortInfo} from '../../shared/model/resortInfo';

export const requestResorts = createAction(
  '[Resorts widget] requesting resorts',
);

export const resetCurrentResort = createAction(
  '[Resorts widget] resetting current resort',
  props<{newCurrentResort: IResortInfo}>()
);

export const requestResortsSuccessful = createAction(
  '[Resorts widget] got resorts successfully',
  props<{newResorts: IResortInfo[]}>()
);
