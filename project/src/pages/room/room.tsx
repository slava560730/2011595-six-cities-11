import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import Map from '../../components/map/map';
import {
  AppRoute,
  ClassNameMap,
  FavoriteState,
  MAX_IMG,
  NEED_MOUSE_LEAVE,
  OPTION_SINGLE,
} from '../../consts';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PlaceCard from '../../components/place-card/place-card';
import PropertyReviews from '../../components/property-reviews/property-reviews';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {
  fetchCurrentOfferAction,
  fetchNearbyOffersAction,
  fetchPostFavoriteStateAction,
  fetchReviewsAction,
} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import { Offer } from '../../types/offer';
import {
  getCurrentOffer,
  getNearbyOffers,
  getOfferDataLoadingState,
  getServerError,
} from '../../store/app-data/selectors';
import { getAuthLoggedStatus } from '../../store/user-process/selectors';
import { firstLetterToUpperCase } from '../../utils';

function Room(): JSX.Element {
  const params = useParams();
  const id = Number(params.id);
  const isOfferDataLoading = useAppSelector(getOfferDataLoadingState);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const isAuthLogged = useAppSelector(getAuthLoggedStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [selectedOffer, setSelectedOffer] = useState<null | number>(id);
  const currentOffer = useAppSelector(getCurrentOffer);
  const isServerError = useAppSelector(getServerError);

  useEffect(() => {
    if (id !== undefined) {
      dispatch(fetchReviewsAction(id));
      dispatch(fetchCurrentOfferAction(id));
      dispatch(fetchNearbyOffersAction(id));
    }
  }, [id]);

  if (isServerError) {
    return <NotFoundScreen />;
  }

  if (isOfferDataLoading || !currentOffer) {
    return <LoadingScreen />;
  }

  const {
    images,
    isPremium,
    title,
    isFavorite,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host: { avatarUrl, name, isPro },
    description,
  } = currentOffer;

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
    <div className="page">
      <Helmet>
        <title>6 cities: property</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(MAX_IMG).map((img) => (
                <div className="property__image-wrapper" key={img}>
                  <img className="property__image" src={img} alt={description} />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button
                  className={cn('property__bookmark-button button', {
                    'property__bookmark-button--active': isFavorite,
                  })}
                  type="button"
                  onClick={handleFavoriteButtonClick}
                >
                  <svg className="place-card__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${Math.round(rating) * 20}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {firstLetterToUpperCase(type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms}
                  {bedrooms === OPTION_SINGLE ? ' Bedroom' : ' Bedrooms'}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} {maxAdults === OPTION_SINGLE ? ' Adult' : ' Adults'}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => (
                    <li className="property__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={cn('property__avatar-wrapper user__avatar-wrapper', {
                      'property__avatar-wrapper--pro': isPro,
                    })}
                  >
                    <img
                      className="property__avatar user__avatar"
                      src={avatarUrl}
                      width="74"
                      height="74"
                      alt={`Host ${name} avatar`}
                    />
                  </div>
                  <span className="property__user-name">{name}</span>
                  <span className="property__user-status">{isPro && 'Pro'}</span>
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <PropertyReviews />
            </div>
          </div>
          <section className="property__map map">
            <Map
              offers={[...nearbyOffers, currentOffer] as Offer[]}
              selectedOffer={selectedOffer}
              classNameMap={ClassNameMap.Room}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearbyOffers.map((offer) => (
                <PlaceCard
                  onSelectedOffer={setSelectedOffer}
                  key={offer.id}
                  offer={offer}
                  offerId={id}
                  isNeedMouseLeave={!NEED_MOUSE_LEAVE}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default Room;
