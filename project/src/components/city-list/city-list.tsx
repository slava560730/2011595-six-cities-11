import { CITIES } from '../../consts';
import CityItem from '../city-item/city-item';

type CityListProps = {
  selectedCity: string;
};

function CityList({ selectedCity }: CityListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <CityItem key={city} city={city} selectedCity={selectedCity} />
      ))}
    </ul>
  );
}

export default CityList;
