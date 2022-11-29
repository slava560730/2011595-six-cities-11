import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_CITY, SortType } from '../consts';
import {
  changeSelectedCity,
  loadCurrentOffer,
  loadNearbyOffers,
  loadOffers,
  loadReviews,
  loadUserInfo,
  requireAuthorization,
  setFormActiveState,
  setOfferDataLoadingStatus,
  setOffersDataLoadingStatus,
  sortOffersByType,
  updateOffersByCity,
} from './action';
import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { sortByDay } from '../utils';

type InitialState = {
  city: string;
  offersByCity: Offer[];
  offers: Offer[];
  nearbyOffers: Offer[];
  reviews: Review[];
  currentOffer?: Offer | undefined;
  currentSortType: string;
  selectState: boolean;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  isOfferDataLoading: boolean;
  formActiveState: boolean;
  userEmail: string;
  avatarUrl: string;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offersByCity: [],
  offers: [],
  nearbyOffers: [],
  reviews: [],
  currentOffer: undefined,
  currentSortType: SortType.Popular,
  selectState: false,
  formActiveState: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  isOfferDataLoading: false,
  userEmail: '',
  avatarUrl: '../img/avatar.svg',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSelectedCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(updateOffersByCity, (state, action) => {
      state.offersByCity = state.offers.filter((offer) => offer.city.name === action.payload.city);
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload.nearbyOffers;
    })
    .addCase(loadCurrentOffer, (state, action) => {
      state.currentOffer = action.payload.currentOffer;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload.reviews.sort(sortByDay);
    })
    .addCase(loadUserInfo, (state, action) => {
      state.userEmail = action.payload.userEmail;
      state.avatarUrl = action.payload.avatarUrl;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload.authorizationStatus;
    })
    .addCase(setFormActiveState, (state, action) => {
      state.formActiveState = action.payload.formActiveState;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload.isOffersDataLoading;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isOfferDataLoading = action.payload.isOfferDataLoading;
    })
    .addCase(sortOffersByType, (state, action) => {
      state.offersByCity = action.payload.offersByCity;
      state.currentSortType = action.payload.currentSortType;
      state.selectState = action.payload.selectState;
    });
});

export { reducer };
