import { State } from '../../types/state';
import { NameSpace, SortType } from '../../consts';
import { getOffersByCity } from '../app-data/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const getCurrentCity = (state: State): string => state[NameSpace.App].city;
export const getCurrentSortType = (state: State): string => state[NameSpace.App].currentSortType;
export const getSelectState = (state: State): boolean => state[NameSpace.App].selectState;

export const getSortedOffers = createSelector(
  getOffersByCity,
  getCurrentSortType,
  (offers, currentSortType) => {
    switch (currentSortType) {
      case SortType.PriceLowToHigh:
        return [...offers].sort((offerA, offerB) => offerA.price - offerB.price);
      case SortType.PriceHighToLow:
        return [...offers].sort((offerA, offerB) => offerB.price - offerA.price);
      case SortType.TopRatedFirst:
        return [...offers].sort((offerA, offerB) => offerB.rating - offerA.rating);
      default:
        return offers;
    }
  }
);
