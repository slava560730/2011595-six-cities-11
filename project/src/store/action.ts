import { createAction } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';

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
