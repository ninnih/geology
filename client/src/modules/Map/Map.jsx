import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Map.scss';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Polygon } from '@react-google-maps/api';

const Map = () => {
  const [map, setMap] = useState(null)
  const containerStyle = {
    width: '400px',
    height: '90vh'
  };
   
  const center = {
    lat: 59.329323,
    lng: 18.068581
  };

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
 
  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <main>
      <section>
      <LoadScript
          googleMapsApiKey="AIzaSyCYFQFqOPNgSl24uqUzhTEs_qgJtLW48y4"
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
        </LoadScript>
      </section>
    </main>
  )
}

export default Map;