import React, { useState, useEffect, useSelector } from 'react';
import { loadModules } from 'esri-loader';

const Polygon = (props) => {
	const [graphic, setGraphic] = useState(null);

	if(props.polygon !== undefined){
		props.polygon.map(polygon => {
			console.log(polygon.geometry.coordinates[0][0])
	})}
	 

	return (
		<></>
	)
}

export default Polygon;