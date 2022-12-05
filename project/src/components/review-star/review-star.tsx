import React, { ChangeEventHandler } from 'react';

type ReviewStarProps = {
  value: number;
  title: string;
  rating: number;
  onFieldChangeHandle: ChangeEventHandler<HTMLInputElement>;
};

function ReviewStar({ value, title, rating, onFieldChangeHandle }: ReviewStarProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        onChange={onFieldChangeHandle}
        checked={value === Number(rating)}
      />
      <label
        htmlFor={`${value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default ReviewStar;
