import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/offer';
import Map from '../../components/map/map';
import { city, ClassNameMap, OPTION_SINGLE } from '../../consts';
import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import PlaceCard from '../../components/place-card/place-card';
import { Review } from '../../types/review';
import PropertyReviews from '../../components/property-reviews/property-reviews';
import cn from 'classnames';

type RoomProps = {
  offers: Offer[];
  reviews: Review[];
};

function Room({ offers, reviews }: RoomProps): JSX.Element {
  const params = useParams();
  const id = Number(params.id);
  const [selectedOffer, setSelectedOffer] = useState(id);
  const currentOffer = offers.find((offer) => offer.id === id);

  if (!currentOffer) {
    return <Navigate replace to="/" />;
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
  const nearOffers = offers.filter((offer) => offer.id !== Number(id));

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
              {images.map((img) => (
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
                >
                  <svg className="place-card__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${rating * 20}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">{type}</li>
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
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
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
              <PropertyReviews reviews={reviews} />
            </div>
          </div>
          <section className="property__map map">
            <Map
              city={city}
              offers={offers}
              selectedOffer={selectedOffer}
              classNameMap={ClassNameMap.Room}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearOffers.map((offer) => (
                <PlaceCard setSelectedOffer={setSelectedOffer} key={offer.id} offer={offer} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default Room;
