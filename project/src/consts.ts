import { City } from './types/offer';

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
}

export enum ClassNameMap {
  Main =  'cities__leaflet',
  Room = 'property__leaflet',
}

export const city: City = {
  name: 'Amsterdam',
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 13,
  },
};

export const URL_MARKER_DEFAULT = '../../img/pin.svg';
export const URL_MARKER_CURRENT = '../../img/pin-active.svg';
export const OPTION_SINGLE = 1;
