import { store } from '../store';
import { AuthorizationStatus } from '../consts';
import { Offer } from './offer';
import { Review } from './review';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userEmail: string;
  avatarUrl: string;
};

export type AppProcess = {
  city: string;
  currentSortType: string;
  selectState: boolean;
};

export type AppData = {
  offers: Offer[];
  favoriteOffers: Offer[],
  nearbyOffers: Offer[];
  reviews: Review[];
  currentOffer?: Offer | undefined;
  isFavoriteOffersDataLoading: boolean;
  isOffersDataLoading: boolean;
  isOfferDataLoading: boolean;
  formActiveState: boolean;
};
