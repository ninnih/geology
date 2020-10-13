import React, { useState, useEffect, useCallback } from 'react';
import * as ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Map.scss';
import { loadCss } from 'esri-loader';
import { Scene } from '@esri/react-arcgis';

loadCss();

const Map = () => {

  return (
    <main className="main--map">
      <section>
        <Scene
          style={{ width: '100vw', height: 'calc(100vh - 60px)' }}
          mapProperties={{ basemap: 'satellite' }}
          viewProperties={{
              center: [59.329323, 18.068581],
              zoom: 6
          }}
        />
      </section>
    </main>
  )
}

export default Map;