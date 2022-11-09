import { Offer } from '../../types/offer';
import React from 'react';
import PlaceCard from '../place-card/place-card';

type OfferListProps = {
  offers: Offer[];
  setSelectedOffer: React.Dispatch<React.SetStateAction<number>>;
};

function OfferList({ offers, setSelectedOffer }: OfferListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard setSelectedOffer={setSelectedOffer} key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

export default OfferList;
