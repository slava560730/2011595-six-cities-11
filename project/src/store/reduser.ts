import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY, SortType } from '../consts';
import { changeSelectedCity, sortOffersByType, updateOffersByCity } from './action';
import { Offer } from '../types/offer';

type InitialState = {
  city: string;
  offersByCity: Offer[];
  currentSortType: string;
  selectState: boolean;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offersByCity: [],
  currentSortType: SortType.Popular,
  selectState: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSelectedCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(updateOffersByCity, (state, action) => {
      state.offersByCity = action.payload.offersByCity;
    })
    .addCase(sortOffersByType, (state, action) => {
      state.offersByCity = action.payload.offersByCity;
      state.currentSortType = action.payload.currentSortType;
      state.selectState = action.payload.selectState;
    });
});

export { reducer };
