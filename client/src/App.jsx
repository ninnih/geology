import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getMinerals } from './js/actions/index';

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
  }, [dispatch])

  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
