import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { redirectToRoute } from './action';
import { saveToken, dropToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData, UserDataProfile } from '../types/user-data';
import { APIRoute, AppRoute } from '../consts';
import { Offer } from '../types/offer';
import { NewReview, Review } from '../types/review';

export const fetchOffersAction = createAsyncThunk<
  Offer[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<Offer[]>(APIRoute.Offers);
  return data;
});

export const fetchNearbyOffersAction = createAsyncThunk<
  Offer[],
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchNearbyOffers', async (id, { extra: api }) => {
  const { data } = await api.get<Offer[]>(`${APIRoute.Offers}${id}${APIRoute.NearbyOffers}`);
  return data;
});

export const fetchReviewsAction = createAsyncThunk<
  Review[],
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchReviews', async (id, { extra: api }) => {
  const { data } = await api.get<Review[]>(`${APIRoute.Reviews}${id}`);
  return data;
});

export const fetchPostReviewAction = createAsyncThunk<
  Review[],
  [NewReview, number],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchPostReview', async ([{ comment, rating }, id], { extra: api }) => {
  const { data } = await api.post<Review[]>(`${APIRoute.Reviews}${id}`, { comment, rating });
  return data;
});

export const fetchCurrentOfferAction = createAsyncThunk<
  Offer,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchCurrentOffer', async (id, { extra: api }) => {
  const { data } = await api.get<Offer>(`${APIRoute.Offers}${id}`);
  return data;
});

export const checkAuthAction = createAsyncThunk<
  UserDataProfile,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { extra: api }) => {
  const {
    data: { email, avatarUrl },
  } = await api.get<UserData>(APIRoute.Login);

  return { avatarUrl: avatarUrl, email: email };
});

export const loginAction = createAsyncThunk<
  UserDataProfile,
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
  dispatch(redirectToRoute(AppRoute.Redirect));
  return { avatarUrl: avatarUrl, email: email };
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
  dispatch(fetchOffersAction());
});

export const fetchFavoriteOffersAction = createAsyncThunk<
  Offer[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFavoriteOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<Offer[]>(APIRoute.FavoriteOffers);
  return data;
});

export const fetchPostFavoriteStateAction = createAsyncThunk<
  Offer,
  [string, number],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchPostFavoriteState', async ([favoriteState, id], { extra: api }) => {
  const { data } = await api.post<Offer>(`${APIRoute.FavoriteOffers}${id}/${favoriteState}`);
  return data;
});
