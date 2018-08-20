import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from "./pages/LandingPage/LandingPage";



export default (
    <Switch>
      <Route exact path="/landingpage" component={ LandingPage }/>
    </Switch>
)
