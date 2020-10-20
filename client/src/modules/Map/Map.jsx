import React, { useState, useEffect, useCallback, useRef } from 'react';
import * as ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadCss, loadModules } from 'esri-loader';
import { Scene } from '@esri/react-arcgis';
import { getPolygon } from '../../js/actions/index';
import Polygon from './Polygon/Polygon';
import './Map.scss';

loadCss();

const MapThing = () => {
  const dispatch = useDispatch();
  const [mapValue, setMapValue] = useState({
    era: '',
    epoch: '',
    period: '',
    coordinates: ''
  })

  let interval = useSelector(state => state.intervalReducer.results)
  let polygon = useSelector(state => state.intervalReducer.polygon)
  let loading = true;

  if(interval === undefined) {
    interval = ['']
    loading = true;
  } else {
    loading = false
  }

  const onChange = e => {
    const selectID = e.target.id;

    setMapValue({
      ...mapValue,
      [selectID]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:8000/api/paleogeography', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mapValue),
    })
    fetch('/api/paleogeography')
      .then(res => res.json())
      .then(data => dispatch(getPolygon(data.features)))
  }

  const mapRef = useRef();

  useEffect(
    () => {
      // lazy load the required ArcGIS API for JavaScript modules and CSS
      loadModules(['esri/Map', 'esri/views/MapView', "esri/Graphic",
      "esri/layers/GraphicsLayer"], { css: true })
      .then(([ArcGISMap, MapView, Graphic, GraphicsLayer]) => {
        const map = new ArcGISMap({
          basemap: 'satellite'
        });

        // load the map view at the ref's DOM node
        const view = new MapView({
          container: mapRef.current,
          map: map,
          center: [18, 59],
          zoom: 4
        });

        var graphicsLayer = new GraphicsLayer();
        map.add(graphicsLayer);

        var point = {
          type: "point",
          longitude: -118.80657463861,
          latitude: 34.0005930608889
        };
        
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [226, 119, 40], // orange
          outline: {
            color: [255, 255, 255], // white
            width: 1
          }
        };
        
        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol
        });
        
        graphicsLayer.add(pointGraphic);

        var polygon = {
          type: "polygon",
          rings: [
            [-118.818984489994, 34.0137559967283],
            [-118.806796597377, 34.0215816298725],
            [-118.791432890735, 34.0163883241613],
            [-118.79596686535, 34.008564864635],
            [-118.808558110679, 34.0035027131376]
          ]
        };
        
        var simpleFillSymbol = {
          type: "simple-fill",
          color: [227, 139, 79, 0.8], // orange, opacity 80%
          outline: {
            color: [255, 255, 255],
            width: 1
          }
        };
        
        var polygonGraphic = new Graphic({
          geometry: polygon,
          symbol: simpleFillSymbol
        });
        
        graphicsLayer.add(polygonGraphic);

        return () => {
          if (view) {
            // destroy the map view
            view.destroy();
          }
        };

      
      });
    }
  );
    

  return (
    <main className="main--map">
      <section className="map__wrapper">
        {/* <Scene
          style={{ width: '50vw', height: 'calc(100vh - 60px)' }}
          mapProperties={{ basemap: 'satellite' }}
          viewProperties={{
              center: [59.334591, 18.063240],
              zoom: 3
          }}>
          <Polygon polygon={polygon}/>
        </Scene> */}
        <div className="webmap" ref={mapRef}>
        </div>
        {loading 
        ? <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        : 
        <form onSubmit={onSubmit}>
          <label htmlFor="">Period</label>
          <select 
            name="period" 
            id="period"
            value={mapValue.period}
            onChange={onChange}>
            {interval.map((interval, index) => {
              if(interval.int_type === 'period') {
                return <option key={index} id={interval.name}>{interval.name}</option>
              }
            })}
          </select>
          <button>Submit</button>
        </form>}
      </section>
    </main>
  )
}

export default MapThing;
