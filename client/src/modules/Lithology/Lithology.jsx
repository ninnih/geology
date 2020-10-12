import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from "@material-ui/lab";
import usePagination from "../Pagination";
import SearchFormLith from '../../components/SearchFormLith/SearchFormLith'
import './Lithology.scss';
import Fade from 'react-reveal/Fade';
import mineralIMG from '../../assets/images/minerals/grant-durr-j7WBHTOIyBA-unsplash.jpg'

const Lithology = () => {
let lithology = useSelector(state => state.lithologyReducer.results)
let loading = false;
console.log(lithology)

if(lithology === undefined) {
  lithology = ['']
  loading = true;
} else {
  loading = false
}

let [page, setPage] = useState(1);
const PER_PAGE = 12;

const count = Math.ceil(lithology.length / PER_PAGE);
const _DATA = usePagination(lithology, PER_PAGE);

const handleChange = (e, page) => {
  setPage(page);
  _DATA.jump(page);
};

  return (
    <main>
      <SearchFormLith />
      <section className="wrapper">
        <section className="search__info">
          <h3>Found {lithology.length} liths matching your search</h3>
        </section>   
      { loading ? 
          <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          : 
          <section className="searchresults">
          {_DATA.currentData().map((lith, index) => { 
            return (
              <Fade up><article key={index} className="searchresults__item">
                <h3>{lith.name}</h3>
                <section className="searchresults__item__img" style={{backgroundColor: lith.color}}>
                </section>
                <section className="searchresults__item__info">
                  <article>
                    <h4>Lithology type:</h4>
                    {lith.type ? <p>{lith.type}</p> : <p className="searchresults__item__info__undefined">undefined</p>}
                  </article>
                  <article>
                    <h4>Lithology color:</h4>
                    {lith.color ? <p style={{color: lith.color}}>{lith.color}</p> : <p className="searchresults__item__info__undefined">undefined</p>}
                  </article>
                  <article>
                    <h4>Group:</h4>
                    {lith.group ? <p>{lith.group}</p> : <p className="searchresults__item__info__undefined">undefined</p>}
                  </article>
                  <article>
                    <h4>Class:</h4>
                    {lith.class ? <p>{lith.class}</p> : <p className="searchresults__item__info__undefined">undefined</p>}
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

export default Lithology;