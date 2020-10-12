import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from "@material-ui/lab";
import usePagination from "../Pagination";
import './Search.scss';
import filterfunction from '../../components/SearchForm/SearchForm'
import Fade from 'react-reveal/Fade';


import mineralIMG from '../../assets/images/minerals/grant-durr-j7WBHTOIyBA-unsplash.jpg'
import SearchForm from '../../components/SearchForm/SearchForm';

const Search = () => {
  let minerals = useSelector(state => state.mineralReducer.results);

  let loading = false;
  if(minerals === undefined) {
    minerals = ['']
    loading = true;
  } else {
    loading = false
  }

  let [page, setPage] = useState(1);
  const PER_PAGE = 12;

  const count = Math.ceil(minerals.length / PER_PAGE);
  const _DATA = usePagination(minerals, PER_PAGE);

  const handleChange = (e, page) => {
    setPage(page);
    _DATA.jump(page);
  };

  return (
    <main>
      <SearchForm />
      <section className="wrapper">
          <section className="search__info">
            <h3>Found {minerals.length} minerals matching your search</h3>
          </section>
          <section className="pagination">
            <Pagination
              count={count}
              size="small"
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={handleChange}
            />
          </section>
          { loading ? 
          <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          : 
          <section className="searchresults">
          {_DATA.currentData().map((mineral, index) => { 
            return (
              <Fade up><article key={index} className="searchresults__item">
                <h3>{mineral.mineral}</h3>
                <p dangerouslySetInnerHTML={{ __html: mineral.formula_tags }} className="searchresults__item--right"/>
                <section className="searchresults__item__img">
                  <img src={mineralIMG} alt=""/>
                </section>
                <section className="searchresults__item__info">
                  <article>
                    <h4>Mineral type:</h4>
                    {mineral.mineral_type ? <p>{mineral.mineral_type}</p> : <p className="searchresults__item__info__undefined">undefined</p>}
                  </article>
                  <article>
                    <h4>Mineral color:</h4>
                    {mineral.mineral_color ? <p>{mineral.mineral_color}</p> : <p className="searchresults__item__info__undefined">undefined</p>}
                  </article>
                  <article>
                    <h4>Lustre:</h4>
                    {mineral.lustre ? <p>{mineral.lustre}</p> : <p className="searchresults__item__info__undefined">undefined</p>}
                  </article>
                  <article>
                    <h4>Crystal form:</h4>
                    {mineral.crystal_form ? <p>{mineral.crystal_form}</p> : <p className="searchresults__item__info__undefined">undefined</p>}
                  </article>
                  <article>
                    <h4>Hardness:</h4>
                    <p>{mineral.hardness_min} - {mineral.hardness_max}</p>
                  </article>
                </section>
              </article>
              </Fade>
              )}
            )}
          <section className="pagination">
            <Pagination
              count={count}
              size="small"
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={handleChange}
            />
          </section>
        </section>
        }

      </section>
    </main>
  )
}

export default Search;