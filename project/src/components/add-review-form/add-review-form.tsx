import React, { FormEvent, useState } from 'react';
import { NewReview } from '../../types/review';
import { fetchPostReviewAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import { defaultReviewState, REVIEW_LENGTH, ReviewRating } from '../../consts';

function AddReviewForm(): JSX.Element {
  const formActiveState = useAppSelector((state) => state.formActiveState);
  const params = useParams();
  const id = Number(params.id);
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<NewReview>(defaultReviewState);
  const { comment, rating } = formData;

  const fieldChangeHandle = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(fetchPostReviewAction([formData, id]));
    setFormData(defaultReviewState);
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {ReviewRating.map((data) => (
          <>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={data.value}
              id={`${data.value}-stars`}
              type="radio"
              onChange={fieldChangeHandle}
              checked={data.value === Number(rating)}
            />
            <label
              htmlFor={`${data.value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={data.title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        maxLength={REVIEW_LENGTH.max}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={fieldChangeHandle}
        value={comment}
        disabled={formActiveState}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={comment.length < REVIEW_LENGTH.min || rating === 0 || formActiveState}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddReviewForm;
