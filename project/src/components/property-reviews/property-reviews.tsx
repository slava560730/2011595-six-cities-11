import AddReviewForm from '../add-review-form/add-review-form';
import React from 'react';
import PropertyReviewItem from '../property-review-item/property-review-item';
import { useAppSelector } from '../../hooks';
import { getAuthLoggedStatus } from '../../store/user-process/selectors';
import { getSortedReviews } from '../../store/app-data/selectors';

function PropertyReviews(): JSX.Element {
  const reviews = useAppSelector(getSortedReviews);
  const isAuthLoggedStatus = useAppSelector(getAuthLoggedStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <PropertyReviewItem review={review} key={review.id} />
        ))}
      </ul>
      {isAuthLoggedStatus && <AddReviewForm />}
    </section>
  );
}

export default PropertyReviews;
