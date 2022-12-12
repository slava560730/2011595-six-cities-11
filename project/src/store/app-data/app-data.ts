import { AppData } from '../../types/state';
import { DEFAULT_REVIEW_STATE, NameSpace } from '../../consts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
import { NewReview } from '../../types/review';

const initialState: AppData = {
  offers: [],
  favoriteOffers: [],
  nearbyOffers: [],
  reviews: [],
  formData: DEFAULT_REVIEW_STATE,
  currentOffer: undefined,
  isOffersDataLoading: false,
  isPostFavoriteStateStatus: false,
  isOfferDataLoading: false,
  isServerError: false,
  formActiveState: false,
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeFormData: (state, action: PayloadAction<NewReview>) => {
      state.formData = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
        state.isServerError = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isServerError = true;
      })
      .addCase(fetchCurrentOfferAction.rejected, (state) => {
        state.isServerError = true;
      })
      .addCase(fetchCurrentOfferAction.pending, (state) => {
        state.isOfferDataLoading = true;
        state.isServerError = false;
      })
      .addCase(fetchCurrentOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isOfferDataLoading = false;
        state.isServerError = false;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchPostReviewAction.rejected, (state) => {
        state.formActiveState = false;
      })
      .addCase(fetchPostReviewAction.pending, (state) => {
        state.formActiveState = true;
      })
      .addCase(fetchPostReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.formActiveState = false;
        state.formData = DEFAULT_REVIEW_STATE;
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

export const { changeFormData } = appData.actions;
