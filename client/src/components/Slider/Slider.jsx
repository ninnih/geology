import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

import './Slider.scss';
import ImageOne from '../../assets/images/1.jpg'
import ImageTwo from '../../assets/images/2.jpg'
import ImageThree from '../../assets/images/3.jpg'
import ImageFour from '../../assets/images/4.jpg'

const slideImages = [
  ImageOne,
  ImageTwo,
  ImageThree,
  ImageFour
]
const Slider = () => {

  return (
    <section className="slider">
        <Slide easing="ease">
          <article className="each-slide">
            <article style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </article>
          </article>
          <article className="each-slide">
            <article style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </article>
          </article>
          <article className="each-slide">
            <article style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </article>
          </article>
          <article className="each-slide">
            <article style={{'backgroundImage': `url(${slideImages[3]})`}}>
            </article>
          </article>
        </Slide>
      <h1 className="slider__header">Minerals man, minerals</h1>
    </section>

  );
}

export default Slider;
