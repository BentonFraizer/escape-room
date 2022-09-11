import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import useMap from '../../hooks/useMap';
import { City } from '../../types';
import 'leaflet/dist/leaflet.css';
import iconPin from '../../assets/img/icon-pin.svg'

type MapProps = {
  city: City;
};

function Map(props: MapProps) {
  const { city } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: iconPin,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      leaflet
        .marker({
          lat: city.lat,
          lng: city.lng,
        }, {
          icon: defaultCustomIcon,
        })
        .addTo(map);
    }
  }, [map, city, defaultCustomIcon]);

  return (
    <div
      style={{height: '336px', width: '649px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
