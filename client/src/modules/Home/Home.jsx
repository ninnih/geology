import React, { useState } from 'react';
import Slider from '../../components/Slider/Slider';
import Fade from 'react-reveal/Fade';

import './Home.scss';

const Home = () => {

  return (
    <main>
      <Slider />
      <section className="wrapper">
        <section>
          <h2>Information</h2>
        </section>
        <section className="information">
          <Fade right>
            <article className="information__item">
              <h3>Something</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis delectus quisquam cum doloremque cupiditate, maiores incidunt tempore, aliquid dicta error rerum quos ullam omnis veniam repellendus! Deleniti, minus debitis! Nisi.</p>
            </article>
            <article className="information__item">
              <h3>Something</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum ab incidunt doloribus architecto laboriosam! Quidem laboriosam blanditiis aperiam ut, maxime qui vero optio repellat consequuntur velit cum, labore commodi.</p>
            </article>
            <article className="information__item">
              <h3>Something</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore molestias fugit vero neque quis consequuntur magni voluptatum sunt impedit voluptatem nesciunt corporis, deleniti excepturi natus qui minima provident, ipsa quisquam.</p>
            </article>
          </Fade>
        </section>
      </section>
    </main>
  )
}

export default Home;