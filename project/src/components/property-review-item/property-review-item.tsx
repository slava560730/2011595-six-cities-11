import { Review } from '../../types/review';
import React from 'react';
import dayjs from 'dayjs';

type PropertyReviewItemProps = {
  review: Review;
};

function PropertyReviewItem({
  review: {
    rating,
    date,
    user: { avatarUrl, name },
    comment,
  },
}: PropertyReviewItemProps): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width="54"
            height="54"
            alt={`Reviews ${name} avatar`}
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>
          {dayjs(date).format('MMM YYYY')}
        </time>
      </div>
    </li>
  );
}

export default PropertyReviewItem;
