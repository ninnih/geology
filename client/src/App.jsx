import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getMinerals, getLithology, getInterval, getPolygon } from './js/actions/index';

import './App.scss';
import Header from './components/Header/Header';
import Routes from './modules/Routes/Routes';
import Footer from './components/Footer/Footer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMinerals = async () => {
      await fetch('/api/minerals')
        .then(res => res.json())
        .then(data => dispatch(getMinerals(data)))
    }
    fetchMinerals()

    const fetchLithology = async () => {
      await fetch('/api/lithology')
        .then(res => res.json())
        .then(data => dispatch(getLithology(data)))
    }
    fetchLithology()

    const fetchIntervals = async () => {
      await fetch('/api/intervals')
        .then(res => res.json())
        .then(data => dispatch(getInterval(data)))
    }
    fetchIntervals()
  }, [])

  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
