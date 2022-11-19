import { useRef, useEffect, useState } from 'react';
import { Icon, Marker } from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../consts';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap/useMap';
import { useAppSelector } from '../../hooks';

type MapProps = {
  selectedOffer: number | null;
  classNameMap: string;
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

function Map({ selectedOffer, classNameMap }: MapProps): JSX.Element {
  const offersByCity = useAppSelector((state) => state.offersByCity);
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  const [markers, setMarkers] = useState<Marker[]>([]);

  useEffect(() => {
    const newMarkers: Marker[] = [];
    if (map) {
      offersByCity.forEach(({ location: { latitude, longitude }, id }) => {
        const marker = new Marker({
          lat: latitude,
          lng: longitude,
        });
        marker
          .setIcon(
            selectedOffer !== undefined && id === selectedOffer
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
        newMarkers.push(marker);
      });
      setMarkers(newMarkers);
    } return markers.forEach((marker) => {
      marker.remove();
    });
  }, [map, offersByCity, selectedOffer]);

  return <div className={classNameMap} ref={mapRef}></div>;
}

export default Map;
