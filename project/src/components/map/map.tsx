import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../consts';
import 'leaflet/dist/leaflet.css';
import { City, Offer } from '../../types/offer';
import useMap from '../../hooks/useMap/useMap';

type MapProps = {
  city: City;
  offers: Offer[];
  selectedOffer: number | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ city, offers, selectedOffer }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return <div style={{ height: '751px', width: '512px' }} ref={mapRef}></div>;
}

export default Map;
