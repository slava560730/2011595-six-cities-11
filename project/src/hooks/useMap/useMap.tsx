import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { City } from '../../types/offer';
import { useAppSelector } from '../index';
import { DEFAULT_CITY } from '../../consts';
import { getCurrentCity, getSortedOffers } from '../../store/app-process/selectors';

function useMap(mapRef: MutableRefObject<HTMLElement | null>): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  const city = useAppSelector(getCurrentCity);
  const offersByCity = useAppSelector(getSortedOffers);
  const currentCity: City =
    offersByCity.find((offer) => offer.city.name === city)?.city || DEFAULT_CITY;
  const { latitude, longitude, zoom } = currentCity.location;

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
    map?.setView([latitude, longitude], zoom);
  }, [mapRef, map, city, currentCity]);

  return map;
}

export default useMap;
