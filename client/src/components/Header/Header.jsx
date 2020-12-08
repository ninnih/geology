import React from 'react';

import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <header className="header">
      <img src="" alt="" className="header__logo"/>
      <nav className="header__navigation">
        <ul className="header__navigation__list">
          <li>
            <NavLink to="/" exact>
              <h3 className="header__navigation__list__item__text">home</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/search" exact>
              <h3 className="header__navigation__list__item__text">minerals</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/lithology" exact>
              <h3 className="header__navigation__list__item__text">lithology</h3>
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/paleogeography" exact>
              <h3 className="header__navigation__list__item__text">Paleogeography</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" exact>
              <h3 className="header__navigation__list__item__text">about</h3>
            </NavLink>
          </li> */}
        </ul>
      </nav> 
    </header>
  );
}

export default Header;
