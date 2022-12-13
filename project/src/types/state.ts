import { store } from '../store';
import { AuthorizationStatus } from '../consts';
import { Offer } from './offer';
import { NewReview, Review } from './review';

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
  favoriteOffers: Offer[];
  nearbyOffers: Offer[];
  reviews: Review[];
  formData: NewReview;
  currentOffer: Offer | undefined;
  isOffersDataLoading: boolean;
  isOfferDataLoading: boolean;
  isPostFavoriteStateStatus: boolean;
  formActiveState: boolean;
  isServerError: boolean;
};
