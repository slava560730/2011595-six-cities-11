import { Review } from '../../types/review';
import AddReviewForm from '../add-review-form/add-review-form';
import React from 'react';
import PropertyReviewItem from '../property-review-item/property-review-item';

type PropertyReviewsProps = {
  reviews: Review[];
};

function PropertyReviews({ reviews }: PropertyReviewsProps): JSX.Element {
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
      <AddReviewForm />
    </section>
  );
}

export default PropertyReviews;
