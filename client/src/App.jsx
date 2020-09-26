import React, { useEffect } from 'react';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux'
import { getMinerals } from './js/actions/index';

function App() {
  const minerals = useSelector(state => state);
  console.log(minerals)
  const dispatch = useDispatch();
  
  const fetchMinerals = async () => {
    await fetch('http://localhost:8000/api/minerals')
      .then(res => res.json())
      .then(data => dispatch(getMinerals(data)))
  }

  useEffect(() => {
    fetchMinerals()
  }, [])

  return (
    <section>
      {minerals.map((mineral, index) => { return (<article key={index}>{mineral.mineral}</article>)})}
    </section>
  );
}

export default App;
