import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import './SearchForm.scss';
import { 
  crystalForm, 
  crystalColour,
  mineralLustre,
  mineralType
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
    // Fix so empty input doesn't crash app, conditional here.
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
    // Only submit none empty strings fix here ?  
  }

  return (
      <section className="searchheader">
        <section className="form__wrapper">
          <form onSubmit={onSubmit} className="searchform">
            <article className="searchform__input searchform__input--center">
              <label htmlFor="mineral">Mineral:</label>
              <input type="text" name="mineral" id=""/>
            </article>
            <article className="searchform__input">
              <label htmlFor="mineraltype">Mineral type:</label>
              <select 
                name="mineraltype" 
                id="mineral_type" 
                value={formValue.mineral_type} 
                onChange={onChange}>
                  {mineralType.map((type, index) => {
                    return (
                    <option key={index} value={type}>{type}</option>
                    )
                  })}
              </select>
            </article>
            <article className="searchform__input">
              <label htmlFor="crystalform">Crystal form:</label>
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
            </article>
            <article className="searchform__input">
              <label htmlFor="mineralcolor">Mineral colour:</label>
              <Select 
                options={colourOptions[0]}
                isMulti
                name="mineralcolor"
                className="basic-multi-select"
                classNamePrefix="mineral_colour"
                onChange={onMultiChange}
                />
            </article>
            <article className="searchform__input">
              <label htmlFor="lustre">Lustre:</label>
              <Select 
                options={lustre[0]}
                isMulti
                name="lustre"
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={onMultiChange}
                />
            </article>
            <article className="searchform__input searchform__input--button">
              <button>Search</button>
            </article>
          </form>
        </section>
      </section>
  )
}

export default SearchForm;
