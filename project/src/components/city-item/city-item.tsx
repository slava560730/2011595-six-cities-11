import { useAppDispatch } from '../../hooks';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { SELECT_OPEN, SortType } from '../../consts';
import React from 'react';
import { changeSelectedCity, sortOffersByType } from '../../store/app-process/app-process';

type CityItemProps = {
  city: string;
  selectedCity: string;
};

function CityItem({ city, selectedCity }: CityItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <li key={city} className="locations__item">
      <Link
        className={cn('locations__item-link tabs__item', {
          'tabs__item--active': city === selectedCity,
        })}
        to="#"
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();
          dispatch(
            sortOffersByType({
              currentSortType: SortType.Popular,
              selectState: !SELECT_OPEN,
            })
          );
          dispatch(changeSelectedCity(city));
        }}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default CityItem;
