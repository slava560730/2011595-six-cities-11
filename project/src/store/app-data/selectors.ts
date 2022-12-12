import { State } from '../../types/state';
import { Offer } from '../../types/offer';
import { MAX_REVIEWS, NameSpace } from '../../consts';
import { NewReview, Review } from '../../types/review';
import { sortByDay } from '../../utils';
import { createSelector } from '@reduxjs/toolkit';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Data].nearbyOffers;
export const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.Data].favoriteOffers;
export const getFavoriteOffersCount = (state: State): number =>
  state[NameSpace.Data].favoriteOffers.length;
export const getPostFavoriteStateStatus = (state: State): boolean =>
  state[NameSpace.Data].isPostFavoriteStateStatus;
export const getOffersDataLoadingState = (state: State): boolean =>
  state[NameSpace.Data].isOffersDataLoading;
export const getOfferDataLoadingState = (state: State): boolean =>
  state[NameSpace.Data].isOfferDataLoading;
export const getFormActiveState = (state: State): boolean => state[NameSpace.Data].formActiveState;
export const getCurrentOffer = (state: State): Offer | undefined =>
  state[NameSpace.Data].currentOffer;
export const getReviews = (state: State): Review[] => state[NameSpace.Data].reviews;
export const getFormData = (state: State): NewReview => state[NameSpace.Data].formData;
export const getServerError = (state: State): boolean => state[NameSpace.Data].isServerError;

export const getSortedReviews = createSelector(getReviews, (reviews) =>
  reviews.slice(MAX_REVIEWS).sort(sortByDay)
);
