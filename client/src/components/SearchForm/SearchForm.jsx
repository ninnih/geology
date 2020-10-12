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
    mineral_color: [],
    crystal_form: '',
    lustre: [],
    hardness: ''
  })

  const colourOptions = [
    crystalColour.map((colour, index) => {
      return ({ value: `${colour}`, label: `${colour}`, id: 'mineral_color' })
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

  const onMultiChangeColor = input => {
    const newArray = [];

    if(input === null) {
       setFormValue({
        ...formValue,
        mineral_color: [],
      })
    } else {
      const selectID = input[0].id;

      input.map((value, index) => {
        return newArray.push(value.value)
      })
  
      setFormValue({
        ...formValue,
        [selectID]: newArray
      })
    }
  }

  const onMultiChangeLustre = input => {
    const newArray = [];
    console.log('Input:', input)
    if(input === null) {
      setFormValue({
        ...formValue,
        lustre: []
      })
    } else {
      console.log(input)
      const selectID = input[0].id;


      input.map((value, index) => {
        return newArray.push(value.value)
      })
  
      setFormValue({
        ...formValue,
        [selectID]: newArray
      })
    }
  }

  const onSubmit = e => {
    e.preventDefault()
    dispatch(filterMinerals(formValue))
  }

  return (
      <section className="searchheader">
        <section className="form__wrapper">
          <section>
            <h3>Enter information to identify a mineral</h3>
          </section>
          <form onSubmit={onSubmit} className="searchform">
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
                onChange={onMultiChangeColor}
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
                onChange={onMultiChangeLustre}
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
