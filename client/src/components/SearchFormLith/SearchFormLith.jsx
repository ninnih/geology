import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import './SearchFormLith.scss';
import { 
  lithClass, 
  lithColor,
  lithGroup,
  lithType
} from '../SearchFormLith/SearchFormLithInfo';
import { filterLithology } from '../../js/actions';

const SearchFormLith = () => {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    lith_name: '',
    lith_type: '',
    lith_group: '',
    lith_class: '',
    lith_color: '',
  })

  const onChange = e => {
    const selectID = e.target.id;

    setFormValue({
      ...formValue,
      [selectID]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    dispatch(filterLithology(formValue))
  }

  return (
      <section className="searchheader">
        <section className="form__wrapper">
          <section>
            <h3>Find lith</h3>
          </section>
          <form onSubmit={onSubmit} className="searchform">
            <article className="searchform__input">
              <label htmlFor="mineraltype">Lithology type:</label>
              <select 
                name="lithologytype" 
                id="lith_type" 
                value={formValue.lith_type} 
                onChange={onChange}>
                  {lithType.map((type, index) => {
                    return (
                    <option key={index} value={type}>{type}</option>
                    )
                  })}
              </select>
            </article>
            <article className="searchform__input">
              <label htmlFor="crystalform">Group:</label>
              <select 
                name="lithologygroup" 
                id="lith_group" 
                value={formValue.lith_group} 
                onChange={onChange}>
                  {lithGroup.map((group, index) => {
                    return (
                    <option key={index} value={group}>{group}</option>
                    )
                  })}
              </select>
            </article>
            <article className="searchform__input">
              <label htmlFor="mineralcolor">Class:</label>
              <select 
                name="lithologyclass" 
                id="lith_class" 
                value={formValue.lith_class} 
                onChange={onChange}>
                  {lithClass.map((lithClass, index) => {
                    return (
                    <option key={index} value={lithClass}>{lithClass}</option>
                    )
                  })}
              </select>
                
            </article>
            <article className="searchform__input">
              <label htmlFor="lustre">Color:</label>
              <select 
                name="lithologycolor" 
                id="lith_color" 
                value={formValue.lith_color} 
                onChange={onChange}>
                  {lithColor.map((color, index) => {
                    return (
                    <option key={index} value={color}>{color}</option>
                    )
                  })}
              </select>
            </article>
            <article className="searchform__input searchform__input--button">
              <button>Search</button>
            </article>
          </form>
        </section>
      </section>
  )
}

export default SearchFormLith;
