import { useAppDispatch } from '../../hooks';
import { changeSelectedCity } from '../../store/action';
import { Link } from 'react-router-dom';
import cn from 'classnames';

type FavoritesProps = {
  city: string;
  selectedCity: string;
};

function CityItem({ city, selectedCity }: FavoritesProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <li key={city} className="locations__item">
      <Link
        className={cn('locations__item-link tabs__item', {
          'tabs__item--active': city === selectedCity,
        })}
        to="#"
        onClick={() => {
          dispatch(changeSelectedCity(city));
        }}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default CityItem;
