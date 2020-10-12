import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from "@material-ui/lab";
import usePagination from "../Pagination";
import './Lithology.scss';
import Fade from 'react-reveal/Fade';

const Lithology = () => {

  return (
    <main>
      <section className="wrapper">      
        {/* <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> */}  
        <section className="searchresults">
        </section>
      </section>
    </main>
  )
}

export default Lithology;