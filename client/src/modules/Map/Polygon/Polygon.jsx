import React, { useState, useEffect, useSelector } from 'react';
import { loadModules } from 'esri-loader';

const Polygon = (props) => {
	const [graphic, setGraphic] = useState(null);

	if(props.polygon !== undefined){
		props.polygon.map(polygon => {
			console.log(polygon.geometry.coordinates[0][0])
	})}
	 
	
	useEffect(() => {
		loadModules(['esri/Graphic']).then(([Graphic]) => {
	
			// Create a polygon geometry
			const polygon = {
				type: "polygon", 
				rings: [
					[
						16.3114255913417,
						4.92575173625548
						],
						[
						16.9858982629116,
						3.65548374229485
						],
						[
						18.4363267420661,
						1.75408279879538
						],
						[
						19.2253433263139,
						1.26212162819316
						],
						[
						19.8849583386841,
						0.587985554722726
						],
						[
						20.6367316576114,
						0.306667656362467
						],
						[
						21.1812880909159,
						-1.13470213883346
						],
						[
						16.8273757884526,
						-2.37912627604857
						],
						[
						16.135589092675,
						-2.50826762111364
						],
						[
						15.5978310437721,
						-2.36165813689019
						],
						[
						15.2901336632477,
						-2.5497231993866
						],
						[
						14.2815773503548,
						-2.26458246132137
						],
						[
						13.2207917041975,
						-2.20288882834162
						],
						[
						12.6262515622504,
						-1.93652532552221
						],
						[
						12.0510486904547,
						-2.01342501341479
						],
						[
						11.9473281849168,
						-1.86493282584349
						],
						[
						11.2573969158752,
						-1.98048684720353
						],
						[
						8.01309423943559,
						-0.52112488806783
						],
						[
						8.89886039707745,
						0.798080809757635
						],
						[
						8.44287428645074,
						1.00476877161008
						],
						[
						9.31707349303575,
						2.1255250244566
						],
						[
						9.3468505200356,
						3.50139082149079
						],
						[
						9.00175024479547,
						3.87569858345881
						],
						[
						10.0563230857757,
						4.98345240559501
						],
						[
						9.91062441872522,
						5.36207495110942
						],
						[
						10.5499719047308,
						6.20876503872452
						],
						[
						11.3536416797649,
						6.48318645271918
						],
						[
						11.8789493325383,
						6.18869816096683
						],
						[
						12.5465800461714,
						6.15435173637026
						],
						[
						13.2944037272905,
						6.39330666517337
						],
						[
						13.8879406827012,
						6.12732382777841
						],
						[
						14.210282066944,
						6.16937933160945
						],
						[
						16.3114255913417,
						4.92575173625548
						]
				]
			};

			// Create a symbol for rendering the graphic
			const fillSymbol = {
				type: "simple-fill", 
				color: [227, 139, 79, 0.8],
				outline: { 
					color: [255, 255, 255],
					width: 1
				}
			};

			// Add the geometry and symbol to a new graphic
			const graphic = new Graphic({
				geometry: polygon,
				symbol: fillSymbol
			});

			setGraphic(graphic);
			
			props.view.graphics.add(graphic);
			
			}).catch((err) => console.error(err));

			return function cleanup() {
				props.view.graphics.remove(graphic);
		};
	}, []);

	return null;
}

export default Polygon;