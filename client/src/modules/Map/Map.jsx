import React, { useState, useEffect, useCallback } from 'react';
import * as ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadCss } from 'esri-loader';
import { Scene } from '@esri/react-arcgis';
import { getPolygon } from '../../js/actions/index';
import Polygon from './Polygon/Polygon';
import './Map.scss';

loadCss();

const Map = () => {
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

  return (
    <main className="main--map">
      <section className="map__wrapper">
        <Scene
          style={{ width: '50vw', height: 'calc(100vh - 60px)' }}
          mapProperties={{ basemap: 'satellite' }}
          viewProperties={{
              center: [59.334591, 18.063240],
              zoom: 3
          }}>
          <Polygon polygon={polygon}/>
        </Scene>
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

export default Map;
