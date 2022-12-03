import AddReviewForm from '../add-review-form/add-review-form';
import React from 'react';
import PropertyReviewItem from '../property-review-item/property-review-item';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../consts';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getSortedReviews } from '../../store/app-data/selectors';

function PropertyReviews(): JSX.Element {
  const reviews = useAppSelector(getSortedReviews);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

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
      {authorizationStatus === AuthorizationStatus.Auth && <AddReviewForm />}
    </section>
  );
}

export default PropertyReviews;
