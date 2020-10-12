import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getMinerals, getLithology } from './js/actions/index';

import './App.scss';
import Header from './components/Header/Header';
import Routes from './modules/Routes/Routes';
import Footer from './components/Footer/Footer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMinerals = async () => {
      await fetch('http://localhost:8000/api/minerals')
        .then(res => res.json())
        .then(data => dispatch(getMinerals(data)))
    }
    fetchMinerals()

    const fetchLithology = async () => {
      await fetch('http://localhost:8000/api/lithology')
        .then(res => res.json())
        .then(data => dispatch(getLithology(data)))
    }
    fetchLithology()
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
