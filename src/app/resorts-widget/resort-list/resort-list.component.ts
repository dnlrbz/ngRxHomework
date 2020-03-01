import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IResortInfo, ResortInfoType} from '../../shared/model/resortInfo';
import {Store} from '@ngrx/store';
import {State} from '../../store/reducers/resorts.reducer';




@Component({
  selector: 'app-resorts-list',
  templateUrl: './resort-list.component.html',
  styleUrls: ['./resort-list.component.css']
})
export class ResortListComponent implements OnInit {

  public resortTypes = [ResortInfoType.hotel, ResortInfoType.fishing, ResortInfoType.tour, ResortInfoType.weather];

  public resorts: IResortInfo[];
  public filteredResorts: IResortInfo[];


  @Input()
  set resortList(list: IResortInfo[]) {
    this.resorts = list;
    this.filteredResorts = list;
  }
  currResort: IResortInfo = null;

  @Output() currResortChange = new EventEmitter<IResortInfo>();


  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    this.store.select(state => this.currResort = state.currentResort);
  }


  selectResort(obj: IResortInfo) {
    this.currResortChange.emit(obj);
  }

  filter(resortType: string) {
    this.filteredResorts = this.resorts.filter(item => item.type === resortType);
  }
}
