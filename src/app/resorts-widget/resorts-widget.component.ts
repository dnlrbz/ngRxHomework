import {Component, OnInit} from '@angular/core';
import {IResortInfo} from '../shared/model/resortInfo';
import {select, Store} from '@ngrx/store';
import {requestResorts, resetCurrentResort} from '../store/actions/resort.actions';
import {DataService} from '../shared/services/data.service';
import {State} from '../store/reducers/resorts.reducer';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-resorts-widget',
  templateUrl: './resorts-widget.component.html',
  styleUrls: ['./resorts-widget.component.css'],
})
export class ResortsWidgetComponent implements OnInit {

  public resortList: Observable<IResortInfo[]> = this.store.select('resorts');

  constructor(private dataService: DataService, private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(requestResorts());
  }

  changeResort(resort: IResortInfo) {
    this.store.dispatch(resetCurrentResort({newCurrentResort: resort}));
  }
}
