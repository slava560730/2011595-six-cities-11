import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_CITY, SortType } from '../consts';
import {
  changeSelectedCity,
  loadOffers,
  loadUserInfo,
  requireAuthorization,
  setOffersDataLoadingStatus,
  sortOffersByType,
  updateOffersByCity,
} from './action';
import { Offer } from '../types/offer';

type InitialState = {
  city: string;
  offersByCity: Offer[];
  offers: Offer[];
  currentSortType: string;
  selectState: boolean;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  userInfo: string;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offersByCity: [],
  offers: [],
  currentSortType: SortType.Popular,
  selectState: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  userInfo: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSelectedCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(updateOffersByCity, (state, action) => {
      state.offersByCity = action.payload.offersByCity.filter(
        (offer) => offer.city.name === state.city
      );
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(loadUserInfo, (state, action) => {
      state.userInfo = action.payload.userInfo;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload.authorizationStatus;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload.isOffersDataLoading;
    })
    .addCase(sortOffersByType, (state, action) => {
      state.offersByCity = action.payload.offersByCity;
      state.currentSortType = action.payload.currentSortType;
      state.selectState = action.payload.selectState;
    });
});

export { reducer };
