import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import About from '../About/About';
import Search from '../Search/Search';


const Routes = (props) => {

  return (
    <Switch> 
      <Route exact path='/' render={(props) => <Home {...props} />}></Route>
      <Route exact path='/about' render={(props) => <About {...props}/>}></Route>
      <Route exact path='/search' render={(props) => <Search {...props}/>}></Route>
    </Switch>
  );
}

export default Routes;