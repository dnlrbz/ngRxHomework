import {IWeather} from './weather';
import {ISocialInfo} from './socialInfo';


export interface IResortInfo {
  img: string;
  address: string;
  phone: number;
  weather: IWeather;
  social_info: ISocialInfo;
  type: string;
}


export class ResortInfoType {
  static hotel = 'Hotel';
  static fishing = 'Fishing';
  static tour = 'Tour';
  static weather = 'Weather';
}


