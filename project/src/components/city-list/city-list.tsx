import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { updateOffersByCity } from '../../store/action';
import { CITIES } from '../../consts';
import CityItem from '../city-item/city-item';

function CityList(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector((state) => state.city);

  useEffect(() => {
    dispatch(updateOffersByCity(selectedCity));
  }, [selectedCity]);

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <CityItem key={city} city={city} selectedCity={selectedCity} />
      ))}
    </ul>
  );
}

export default CityList;
