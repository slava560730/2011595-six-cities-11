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

export const URL_MARKER_DEFAULT = '../../img/pin.svg';
export const URL_MARKER_CURRENT = '../../img/pin-active.svg';
