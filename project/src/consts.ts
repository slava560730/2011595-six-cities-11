import { City } from './types/offer';

export const URL_MARKER_DEFAULT = '../../img/pin.svg';
export const URL_MARKER_CURRENT = '../../img/pin-active.svg';
export const OPTION_SINGLE = 1;
export const MAIN_CITY = 'Paris';
export const NULL_CITY_ID = null;
export const SELECT_OPEN = true;
export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

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

export enum APIRoute {
  Offers = '/hotels/',
  NearbyOffers = '/nearby',
  FavoriteOffers = '/favorite/',
  Reviews = '/comments/',
  Login = '/login',
  Logout = '/logout',
}

export enum ClassNameMap {
  Main = 'cities__leaflet',
  Room = 'property__leaflet',
}

export const DEFAULT_CITY: City = {
  name: 'Paris',
  location: {
    latitude: 48.864716,
    longitude: 2.349014,
    zoom: 13,
  },
};

export enum SortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export enum ReviewLength {
  Min = 50,
  Max = 300,
}

export const DEFAULT_REVIEW_STATE = {
  comment: '',
  rating: 0,
};

export const REVIEW_RATING = [
  {
    title: 'perfect',
    value: 5,
  },
  {
    title: 'good',
    value: 4,
  },
  {
    title: 'not bad',
    value: 3,
  },
  {
    title: 'badly',
    value: 2,
  },
  {
    title: 'terribly',
    value: 1,
  },
];

export enum NameSpace {
  Data = 'DATA',
  App = 'APP',
  User = 'USER',
}

export enum FavoriteStatus {
  Favorite = 1,
  NotFavorite = 0
}
