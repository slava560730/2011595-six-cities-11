import { State } from '../../types/state';
import { Offer } from '../../types/offer';
import { NameSpace } from '../../consts';
import { Review } from '../../types/review';
import { sortByDay } from '../../utils';
import { createSelector } from '@reduxjs/toolkit';
import {getCurrentCity} from "../app-process/selectors";

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Data].nearbyOffers;
export const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.Data].favoriteOffers;
export const getOffersDataLoadingState = (state: State): boolean =>
  state[NameSpace.Data].isOffersDataLoading;
export const getOfferDataLoadingState = (state: State): boolean =>
  state[NameSpace.Data].isOfferDataLoading;
export const getFavoriteOfferDataLoadingState = (state: State): boolean =>
  state[NameSpace.Data].isFavoriteOffersDataLoading;
export const getFormActiveState = (state: State): boolean => state[NameSpace.Data].formActiveState;
export const getCurrentOffer = (state: State): Offer | undefined =>
  state[NameSpace.Data].currentOffer;
export const getReviews = (state: State): Review[] => state[NameSpace.Data].reviews;

export const getSortedReviews = createSelector(getReviews, (reviews) =>
  reviews.slice(-10).sort(sortByDay)
);
export const getOffersByCity = createSelector(getOffers, getCurrentCity, (offers, currentCity) =>
  offers.filter((offer) => offer.city.name === currentCity)
);
