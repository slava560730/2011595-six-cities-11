import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import {
  loadCurrentOffer,
  loadNearbyOffers,
  loadOffers,
  loadReviews,
  loadUserInfo,
  redirectToRoute,
  requireAuthorization,
  setFormActiveState,
  setOfferDataLoadingStatus,
  setOffersDataLoadingStatus,
} from './action';
import { saveToken, dropToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { APIRoute, AppRoute, AuthorizationStatus } from '../consts';
import { Offer } from '../types/offer';
import { NewReview, Review } from '../types/review';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersDataLoadingStatus(true));
  const { data } = await api.get<Offer[]>(APIRoute.Offers);
  dispatch(setOffersDataLoadingStatus(false));
  dispatch(loadOffers(data));
});

export const fetchNearbyOffersAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchNearbyOffers', async (id, { dispatch, extra: api }) => {
  try {
    dispatch(setFormActiveState(true));
    const { data } = await api.get<Offer[]>(`${APIRoute.Offers}${id}${APIRoute.NearbyOffers}`);
    dispatch(setFormActiveState(false));
    dispatch(loadNearbyOffers(data));
  } catch {
    dispatch(setFormActiveState(false));
  }
});

export const fetchReviewsAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchReviews', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<Review[]>(`${APIRoute.Reviews}${id}`);
  dispatch(loadReviews(data));
});

export const fetchPostReviewAction = createAsyncThunk<
  void,
  [NewReview, number],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchPostReview', async ([{ comment, rating }, id], { dispatch, extra: api }) => {
  const { data } = await api.post<Review[]>(`${APIRoute.Reviews}${id}`, { comment, rating });
  dispatch(loadReviews(data));
});

export const fetchCurrentOfferAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchCurrentOffer', async (id, { dispatch, extra: api }) => {
  dispatch(setOfferDataLoadingStatus(true));
  const { data } = await api.get<Offer>(`${APIRoute.Offers}${id}`);
  dispatch(setOfferDataLoadingStatus(false));
  dispatch(loadCurrentOffer(data));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    const {
      data: { email, avatarUrl },
    } = await api.get<UserData>(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(loadUserInfo(email, avatarUrl));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ login: email, password }, { dispatch, extra: api }) => {
  const {
    data: { token, avatarUrl },
  } = await api.post<UserData>(APIRoute.Login, { email, password });
  saveToken(token);
  dispatch(requireAuthorization(AuthorizationStatus.Auth));
  dispatch(loadUserInfo(email, avatarUrl));
  dispatch(redirectToRoute(AppRoute.Main));
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});
