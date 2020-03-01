import {IResortInfo} from '../../shared/model/resortInfo';
import {Action, createReducer, on} from '@ngrx/store';
import {requestResorts, requestResortsSuccessful, resetCurrentResort} from '../actions/resort.actions';

export interface State {
  resorts: IResortInfo[];
  currentResort: IResortInfo;
}

export const initialState: State = {
  resorts: [],
  currentResort: undefined,
};

const resortsReducer = createReducer(
  initialState,
  on(resetCurrentResort, (state, { newCurrentResort }) => ({
    ...state,
    currentResort: newCurrentResort,
  })),
  on(requestResortsSuccessful, (state, { newResorts }) => {
    return {
      ...state,
      resorts: newResorts,
      currentResort: newResorts[0],
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return resortsReducer(state, action);
}
