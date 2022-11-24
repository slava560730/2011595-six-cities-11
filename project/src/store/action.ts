import {createAction} from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { Offer } from '../types/offer';
import { SortType } from '../consts';

export const changeSelectedCity = createAction('offers/changeSelectedCity', (city: string) => ({
  payload: {
    city,
  },
}));

export const updateOffersByCity = createAction('offers/updateOffersByCity', (city: string) => {
  const offersByCity = offers.filter((offer) => offer.city.name === city);

  return {
    payload: {
      offersByCity: offersByCity,
    },
  };
});

export const sortOffersByType = createAction(
  'offers/sortOffersByType',
  (offersByCity: Offer[], currentSortType: string, selectState: boolean) => {
    switch (currentSortType) {
      case SortType.PriceLowToHigh:
        return {
          payload: {
            offersByCity: [...offersByCity].sort((offerA, offerB) => offerA.price - offerB.price),
            currentSortType: currentSortType,
            selectState: selectState,
          },
        };
      case SortType.PriceHighToLow:
        return {
          payload: {
            offersByCity: [...offersByCity].sort((offerA, offerB) => offerB.price - offerA.price),
            currentSortType: currentSortType,
            selectState: selectState,
          },
        };
      case SortType.TopRatedFirst:
        return {
          payload: {
            offersByCity: [...offersByCity].sort((offerA, offerB) => offerB.rating - offerA.rating),
            currentSortType: currentSortType,
            selectState: selectState,
          },
        };

      default:
        return {
          payload: {
            offersByCity: offersByCity,
            currentSortType: currentSortType,
            selectState: selectState,
          },
        };
    }
  }
);
