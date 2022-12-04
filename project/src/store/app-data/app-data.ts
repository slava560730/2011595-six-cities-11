import { AppData } from '../../types/state';
import { NameSpace } from '../../consts';
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCurrentOfferAction,
  fetchFavoriteOffersAction,
  fetchNearbyOffersAction,
  fetchOffersAction,
  fetchPostFavoriteStateAction,
  fetchPostReviewAction,
  fetchReviewsAction,
} from '../api-actions';
import { updateOffers } from '../../utils';

const initialState: AppData = {
  offers: [],
  favoriteOffers: [],
  nearbyOffers: [],
  reviews: [],
  currentOffer: undefined,
  isOffersDataLoading: false,
  isPostFavoriteStateStatus: false,
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
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      })
      .addCase(fetchPostFavoriteStateAction.pending, (state) => {
        state.isPostFavoriteStateStatus = true;
      })
      .addCase(fetchPostFavoriteStateAction.rejected, (state) => {
        state.isPostFavoriteStateStatus = true;
      })
      .addCase(fetchPostFavoriteStateAction.fulfilled, (state, action) => {
        state.offers = updateOffers(state.offers, action.payload);
        state.nearbyOffers = updateOffers(state.nearbyOffers, action.payload);
        state.isPostFavoriteStateStatus = false;
        if (state.currentOffer) {
          state.currentOffer.isFavorite = action.payload.isFavorite;
        }
      });
  },
});
