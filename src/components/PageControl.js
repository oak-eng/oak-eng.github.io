import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Grid } from 'semantic-ui-react';

import Footer from './Footer.js';
import Home from './Home.js';
import Privacy from './Privacy.js';

function Pages({ mobile }) {
  return (
    <Switch>
      <Route exact path="/">
        <Home mobile={mobile}/>
      </Route>
      <Route exact path="/privacy">
        <Privacy />
      </Route>
    </Switch>
  )
}

export default function PageControl() {
  return (
    <>
      <Grid
        columns='equal'
        padded
        stackable
        divided
      >
        <Grid.Row only='mobile'>
          <Pages mobile={true}/>
        </Grid.Row>
        <Grid.Row only='computer tablet'>
          <Grid.Column>
            <Pages />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Footer />
    </>
  )
}
