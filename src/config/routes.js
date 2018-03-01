import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Location from '../container/Location';
import User from '../container/User';
import IndexCategoryDrop from '../components/IndexCategoryDrop';






export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/locations/:location_id' component={ Location }/>
    <Route path='/users/:user_id' component={ User }/>
 </Switch>
)
