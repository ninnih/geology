import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './SearchForm.scss';

const crystalForm = [
  'Trigonal',
  'Tetragonal',
  'Triclinic',
  'Monoclinic',
  'Hexagonal',
  'Orthorhombic',
  'Isometric',
  'Amorphous'
]

const SearchForm = () => {

  return (
      <section className="searchheader">
        <section>
          <form action="">
            <input type="text" name="" id=""/>
            <input type="button" value="Search"/>
          </form>
        </section>
      </section>
  )
}

export default SearchForm;