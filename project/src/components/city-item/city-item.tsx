import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeSelectedCity, sortOffersByType} from '../../store/action';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import {SELECT_OPEN, SortType} from "../../consts";

type FavoritesProps = {
  city: string;
  selectedCity: string;
};

function CityItem({ city, selectedCity }: FavoritesProps): JSX.Element {
  const dispatch = useAppDispatch();
  const offersByCity = useAppSelector((state) => state.offersByCity);

  return (
    <li key={city} className="locations__item">
      <Link
        className={cn('locations__item-link tabs__item', {
          'tabs__item--active': city === selectedCity,
        })}
        to="#"
        onClick={() => {
          dispatch(sortOffersByType(offersByCity, SortType.Popular, !SELECT_OPEN))
          dispatch(changeSelectedCity(city));
        }}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default CityItem;
