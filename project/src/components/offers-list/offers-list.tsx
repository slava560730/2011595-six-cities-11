import React from 'react';
import PlaceCard from '../place-card/place-card';
import { useAppSelector } from '../../hooks';

type OfferListProps = {
  setSelectedOffer: React.Dispatch<React.SetStateAction<number | null>>;
};

function OfferList({ setSelectedOffer }: OfferListProps): JSX.Element {
  const offersByCity = useAppSelector((state) => state.offersByCity);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersByCity.map((offer) => (
        <PlaceCard setSelectedOffer={setSelectedOffer} key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

export default OfferList;
