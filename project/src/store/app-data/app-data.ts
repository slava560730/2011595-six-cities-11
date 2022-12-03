import { AppData } from '../../types/state';
import { NameSpace } from '../../consts';
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCurrentOfferAction,
  fetchNearbyOffersAction,
  fetchOffersAction,
  fetchPostReviewAction,
  fetchReviewsAction,
} from '../api-actions';

const initialState: AppData = {
  offers: [],
  nearbyOffers: [],
  reviews: [],
  currentOffer: undefined,
  isOffersDataLoading: false,
  isOfferDataLoading: false,
  formActiveState: false,
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchCurrentOfferAction.pending, (state) => {
        state.isOfferDataLoading = true;
      })
      .addCase(fetchCurrentOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isOfferDataLoading = false;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchPostReviewAction.pending, (state) => {
        state.formActiveState = true;
      })
      .addCase(fetchPostReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.formActiveState = false;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  },
});
