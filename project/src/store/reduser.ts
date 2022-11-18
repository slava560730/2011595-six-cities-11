import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../consts';
import { changeSelectedCity, updateOffersByCity } from './action';
import { Offer } from '../types/offer';

type InitialState = {
  city: string;
  offersByCity: Offer[];
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offersByCity: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSelectedCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(updateOffersByCity, (state, action) => {
      state.offersByCity = action.payload.offersByCity;
    });
});

export { reducer };
