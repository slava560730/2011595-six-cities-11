import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import OfferList from '../../components/offers-list/offers-list';
import { useState } from 'react';
import Map from '../../components/map/map';
import { ClassNameMap, NULL_CITY_ID } from '../../consts';
import { useAppSelector } from '../../hooks';
import CityList from '../../components/city-list/city-list';
import SortForm from '../../components/sort-form/sort-form';
import MainEmpty from '../../components/main-empty/main-empty';
import cn from 'classnames';
import { getCurrentCity, getSortedOffers } from '../../store/app-process/selectors';

function Main(): JSX.Element {
  const selectedCity = useAppSelector(getCurrentCity);
  const offersByCity = useAppSelector(getSortedOffers);

  const [selectedOffer, setSelectedOffer] = useState<null | number>(NULL_CITY_ID);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header />
      <main
        className={cn('page__main page__main--index', {
          'page__main--index-empty': offersByCity.length === 0,
        })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList selectedCity={selectedCity} />
          </section>
        </div>
        <div className="cities">
          {offersByCity.length !== 0 ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {offersByCity.length} places to stay in {selectedCity}
                </b>
                <SortForm />
                <OfferList onSelectedOffer={setSelectedOffer} />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  {offersByCity.length !== 0 && (
                    <Map
                      offers={offersByCity}
                      selectedOffer={selectedOffer}
                      classNameMap={ClassNameMap.Main}
                    />
                  )}
                </section>
              </div>
            </div>
          ) : (
            <MainEmpty selectedCity={selectedCity} />
          )}
        </div>
      </main>
    </div>
  );
}
export default Main;
