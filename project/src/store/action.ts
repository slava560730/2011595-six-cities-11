import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { AppRoute, AuthorizationStatus, SortType } from '../consts';
import { Review } from '../types/review';

export const changeSelectedCity = createAction('offers/changeSelectedCity', (city: string) => ({
  payload: {
    city,
  },
}));

export const updateOffersByCity = createAction('offers/updateOffersByCity', (city: string) => ({
  payload: {
    city,
  },
}));

export const loadOffers = createAction('data/loadOffers', (offers: Offer[]) => ({
  payload: {
    offers,
  },
}));

export const loadNearbyOffers = createAction('data/loadNearbyOffers', (nearbyOffers: Offer[]) => ({
  payload: {
    nearbyOffers,
  },
}));

export const loadCurrentOffer = createAction('data/loadCurrentOffer', (currentOffer: Offer) => ({
  payload: {
    currentOffer,
  },
}));

export const loadReviews = createAction('data/loadReviews', (reviews: Review[]) => ({
  payload: {
    reviews: reviews.slice(-10),
  },
}));

export const loadUserInfo = createAction(
  'data/loadUserInfo',
  (userEmail: string, avatarUrl: string) => ({
    payload: {
      userEmail,
      avatarUrl,
    },
  })
);

export const sortOffersByType = createAction(
  'offers/sortOffersByType',
  (offersByCity: Offer[], currentSortType: string, selectState: boolean) => {
    switch (currentSortType) {
      case SortType.PriceLowToHigh:
        return {
          payload: {
            offersByCity: [...offersByCity].sort((offerA, offerB) => offerA.price - offerB.price),
            currentSortType,
            selectState,
          },
        };
      case SortType.PriceHighToLow:
        return {
          payload: {
            offersByCity: [...offersByCity].sort((offerA, offerB) => offerB.price - offerA.price),
            currentSortType,
            selectState,
          },
        };
      case SortType.TopRatedFirst:
        return {
          payload: {
            offersByCity: [...offersByCity].sort((offerA, offerB) => offerB.rating - offerA.rating),
            currentSortType,
            selectState,
          },
        };

      default:
        return {
          payload: {
            offersByCity,
            currentSortType,
            selectState,
          },
        };
    }
  }
);

export const requireAuthorization = createAction(
  'user/requireAuthorization',
  (authorizationStatus: AuthorizationStatus) => ({
    payload: {
      authorizationStatus: authorizationStatus,
    },
  })
);

export const setOffersDataLoadingStatus = createAction(
  'data/setOffersDataLoadingStatus',
  (isOffersDataLoading: boolean) => ({
    payload: {
      isOffersDataLoading: isOffersDataLoading,
    },
  })
);

export const setOfferDataLoadingStatus = createAction(
  'data/setOfferDataLoadingStatus',
  (isOfferDataLoading: boolean) => ({
    payload: {
      isOfferDataLoading: isOfferDataLoading,
    },
  })
);

export const redirectToRoute = createAction('redirectToRoute', (toRoute: AppRoute) => ({
  payload: toRoute,
}));

export const setFormActiveState = createAction('form/setFormState', (formActiveState: boolean) => ({
  payload: {
    formActiveState,
  },
}));
