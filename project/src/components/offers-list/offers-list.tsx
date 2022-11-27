import React from 'react';
import PlaceCard from '../place-card/place-card';
import { useAppSelector } from '../../hooks';

type OfferListProps = {
  onSelectedOffer: React.Dispatch<React.SetStateAction<number | null>>;
};

function OfferList({ onSelectedOffer }: OfferListProps): JSX.Element {
  const offersByCity = useAppSelector((state) => state.offersByCity);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersByCity.map((offer) => (
        <PlaceCard onSelectedOffer={onSelectedOffer} key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

export default OfferList;
