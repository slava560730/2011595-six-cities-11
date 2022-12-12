import React, { FormEvent } from 'react';
import { fetchPostReviewAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import { ReviewLength, REVIEW_RATING } from '../../consts';
import { getFormActiveState, getFormData } from '../../store/app-data/selectors';
import ReviewStar from '../review-star/review-star';
import { changeFormData } from '../../store/app-data/app-data';

function AddReviewForm(): JSX.Element {
  const formActiveState = useAppSelector(getFormActiveState);
  const params = useParams();

  const id = Number(params.id);
  const dispatch = useAppDispatch();

  const formData = useAppSelector(getFormData);
  const { comment, rating } = formData;

  const handleFieldChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;
    dispatch(changeFormData({ ...formData, [name]: value }));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(fetchPostReviewAction([formData, id]));
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {REVIEW_RATING.map((data) => (
          <ReviewStar
            onFieldChangeHandle={handleFieldChange}
            value={data.value}
            title={data.title}
            rating={rating}
            key={data.value}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        maxLength={ReviewLength.Max}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleFieldChange}
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
          disabled={comment.length < ReviewLength.Min || rating === 0 || formActiveState}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddReviewForm;
