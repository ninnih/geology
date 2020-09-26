import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from '../../components/Slider/Slider';
import './Home.scss';

const Home = () => {
  const minerals = useSelector(state => state);

  return (
    <main>
      <Slider />
      <section>
        {minerals.map((mineral, index) => { return (<article key={index}>{mineral.mineral}</article>)})}
      </section>
    </main>
  )
}

export default Home;