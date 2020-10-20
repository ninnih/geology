import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCss, loadModules } from 'esri-loader';
import { getPolygon } from '../../../js/actions/index';
import './BedrockMap.scss';

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

  if(polygon !== undefined){
		polygon.map(polygon => {
			console.log(polygon.geometry.coordinates[0][0])
	})}

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
          zoom: 3
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
        if(polygon !== undefined){
        polygon.map(coord => {
          var polygon = {
            type: "polygon",
            rings: [
              coord.geometry.coordinates[0][0]
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
        })
      }

      var coordsWidget = document.createElement("div");
      coordsWidget.id = "coordsWidget";
      coordsWidget.className = "esri-widget esri-component";
      coordsWidget.style.padding = "7px 15px 5px";

      view.ui.add(coordsWidget, "bottom-right");

      function showCoordinates(pt) {
        var coords = "Lat/Lon " + pt.latitude.toFixed(3) + " " + pt.longitude.toFixed(3) +
            " | Scale 1:" + Math.round(view.scale * 1) / 1 +
            " | Zoom " + view.zoom;
        coordsWidget.innerHTML = coords;
      }

      view.watch("stationary", function(isStationary) {
        showCoordinates(view.center);
      });

      view.on("pointer-move", function(evt) {
        showCoordinates(view.toMap({ x: evt.x, y: evt.y }));
      });
        

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
    <article>
        <div className="webmap" ref={mapRef}/>
    </article>
  )
}

export default MapThing;
