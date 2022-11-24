import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateOffersByCity } from '../../store/action';
import { CITIES } from '../../consts';
import CityItem from '../city-item/city-item';

type CityListProps = {
  selectedCity: string;
};

function CityList({ selectedCity }: CityListProps): JSX.Element {
  const { offers } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateOffersByCity(offers, selectedCity));
  }, [selectedCity, offers]);

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <CityItem key={city} city={city} selectedCity={selectedCity} />
      ))}
    </ul>
  );
}

export default CityList;
