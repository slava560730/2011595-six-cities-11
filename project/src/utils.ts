import { Review } from './types/review';
import dayjs from 'dayjs';

export const sortByDay = (reviewA: Review, reviewB: Review) => {
  if (dayjs(reviewB.date).isAfter(dayjs(reviewA.date))) {
    return 1;
  } else {
    return -1;
  }
};
