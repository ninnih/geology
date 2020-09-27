import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import './SearchForm.scss';
import { 
  crystalForm, 
  crystalColour,
  mineralLustre,
} from './SearchFormInfo';
import { filterMinerals } from '../../js/actions';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    mineral: '',
    mineral_type: '',
    mineral_colour: [],
    crystal_form: '',
    lustre: '',
    hardness: ''
  })

  const colourOptions = [
    crystalColour.map((colour, index) => {
      return ({ value: `${colour}`, label: `${colour}`, id: 'mineral_colour' })
    })
  ];

  const lustre = [
    mineralLustre.map((lustre, index) => {
      return ({ value: `${lustre}`, label: `${lustre}`, id: 'lustre' })
    })
  ]

  const onChange = e => {
    const selectID = e.target.id;

    setFormValue({
      ...formValue,
      [selectID]: e.target.value
    })
  }

  const onMultiChange = input => {
    const newArray = [];
    const selectID = input[0].id;

    input.map((value, index) => {
      return newArray.push(value.value)
    })

    setFormValue({
      ...formValue,
      [selectID]: newArray
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    dispatch(filterMinerals(formValue))
  }

  return (
      <section className="searchheader">
        <section>
          <form onSubmit={onSubmit}>
            <input type="text" name="" id=""/>
            <select 
              name="crystalform" 
              id="crystal_form" 
              value={formValue.crystal_form} 
              onChange={onChange}>
                {crystalForm.map((form, index) => {
                  return (
                  <option key={index} value={form}>{form}</option>
                  )
                })}
            </select>
            <article>
              <Select 
                options={colourOptions[0]}
                isMulti
                name="colors"
                className="basic-multi-select"
                classNamePrefix="mineral_colour"
                onChange={onMultiChange}
                />
            </article>
            <article>
              <Select 
                options={lustre[0]}
                id="lustre"
                isMulti
                name="colors"
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={onMultiChange}
                />
            </article>
            <button>Search</button>
          </form>
        </section>
      </section>
  )
}

export default SearchForm;