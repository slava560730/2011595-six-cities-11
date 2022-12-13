import { Offer } from '../../types/offer';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import cn from 'classnames';
import { AppRoute, FavoriteState, NULL_CITY_ID } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchPostFavoriteStateAction } from '../../store/api-actions';
import { getAuthLoggedStatus } from '../../store/user-process/selectors';
import { firstLetterToUpperCase } from '../../utils';

type PlaceCardProps = {
  offer: Offer;
  offerId: number;
  isNeedMouseLeave: boolean;
  onSelectedOffer: React.Dispatch<React.SetStateAction<number | null>>;
};

function PlaceCard({
  offer: { id, isPremium, previewImage, price, isFavorite, rating, title, type },
  onSelectedOffer,
  offerId,
  isNeedMouseLeave,
}: PlaceCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isAuthLogged = useAppSelector(getAuthLoggedStatus);
  const navigate = useNavigate();

  const handleFavoriteButtonClick = () => {
    if (!isAuthLogged) {
      navigate(AppRoute.Login);
    }
    dispatch(
      fetchPostFavoriteStateAction([
        isFavorite ? FavoriteState.NotFavorite : FavoriteState.Favorite,
        id,
      ])
    );
  };

  return (
    <article
      onMouseLeave={() => {
        if (isNeedMouseLeave) {
          onSelectedOffer(NULL_CITY_ID);
        }
      }}
      onMouseOver={() => {
        onSelectedOffer(offerId);
      }}
      className="cities__card place-card"
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={cn('place-card__bookmark-button button', {
              'place-card__bookmark-button--active': isFavorite,
            })}
            type="button"
            onClick={handleFavoriteButtonClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(rating) * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{firstLetterToUpperCase(type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
