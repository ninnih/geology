import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from '../../components/Slider/Slider';
import { Pagination } from "@material-ui/lab";
import usePagination from "../Pagination";
import './Home.scss';

const Home = () => {
  const minerals = useSelector(state => state);

  let [page, setPage] = useState(1);
  const PER_PAGE = 24;

  const count = Math.ceil(minerals.length / PER_PAGE);
  const _DATA = usePagination(minerals, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <main>
      <Slider />
      <section>
        {_DATA.currentData().map((mineral, index) => { return (<article key={index}>{mineral.mineral}</article>)})}
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </section>
    </main>
  )
}

export default Home;