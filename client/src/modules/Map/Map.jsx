import React, { useState, useEffect, useCallback } from 'react';
import * as ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadCss } from 'esri-loader';
import { Scene } from '@esri/react-arcgis';
import Polygon from './Polygon/Polygon';
import { searchInterval } from '../../js/actions';
import './Map.scss';

loadCss();

const Map = () => {
  const [mapValue, setMapValue] = useState({
    era: '',
    epoch: '',
    period: '',
    coordinates: ''
  })
  console.log(mapValue)

  const dispatch = useDispatch();
  let interval = useSelector(state => state.intervalReducer.results)
  // let searchResult = useSelector(state => state.intervalReducer.searchresults)
  // console.log(searchResult)
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
    
  // .then(res => res.json())
  // .then(data => setMapValue({ ...mapValue, era: e.target.id }))
  }

  return (
    <main className="main--map">
      <section className="map__wrapper">
        <Scene
          style={{ width: '50vw', height: 'calc(100vh - 60px)' }}
          mapProperties={{ basemap: 'satellite' }}
          viewProperties={{
              center: [59.329323, 18.068581],
              zoom: 6
          }}>
          <Polygon/>
        </Scene>
        {loading 
        ? <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        : 
        <form onSubmit={onSubmit}>
          {/* <label htmlFor="">Era</label>
          <select 
            name="era" 
            id="era"
            value={mapValue.era}
            onChange={onChange}>
            {interval.map((interval, index) => {
              if(interval.int_type === 'era') {
                return <option key={index} id={interval.name}>{interval.name}</option>
              }
            })}
          </select>
          <label htmlFor="">Epoch</label>
          <select 
            name="epoch" 
            id="epoch"
            value={mapValue.epoch}
            onChange={onChange}>
            {interval.map((interval, index) => {
              if(interval.int_type === 'epoch') {
                return <option key={index} id={interval.name}>{interval.name}</option>
              }
            })}
          </select> */}
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
