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

export enum APIRoute {
  Offers = '/hotels/',
  NearbyOffers = '/nearby',
  Reviews = '/comments/',
  Login = '/login',
  Logout = '/logout',
}

export enum ClassNameMap {
  Main = 'cities__leaflet',
  Room = 'property__leaflet',
}

export const defaultCity: City = {
  name: 'Paris',
  location: {
    latitude: 48.864716,
    longitude: 2.349014,
    zoom: 13,
  },
};

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const URL_MARKER_DEFAULT = '../../img/pin.svg';
export const URL_MARKER_CURRENT = '../../img/pin-active.svg';
export const OPTION_SINGLE = 1;
export const DEFAULT_CITY = 'Paris';
export const NULL_CITY_ID = null;
export const SELECT_OPEN = true;

export enum SortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export const REVIEW_LENGTH = {
  min: 50,
  max: 300,
};

export const MAX_REVIEW_LENGTH = 300;
export const MIN_REVIEW_LENGTH = 50;

export const defaultReviewState = {
  comment: '',
  rating: 0,
};

export const ReviewRating = [
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
