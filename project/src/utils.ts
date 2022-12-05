import { Review } from './types/review';
import dayjs from 'dayjs';
import { Offer } from './types/offer';

export const sortByDay = (reviewA: Review, reviewB: Review) => {
  if (dayjs(reviewB.date).isAfter(dayjs(reviewA.date))) {
    return 1;
  } else {
    return -1;
  }
};

export function arrayRandElement(arr: string[]) {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

export const updateOffers = (offers: Offer[], updatedOffer: Offer | null) =>
  offers.map((item) => {
    if (updatedOffer === null || item.id !== updatedOffer.id) {
      return item;
    }
    return {
      ...item,
      ...updatedOffer,
    };
  });
