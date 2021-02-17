import React from "react";
import { Switch, Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";

import Extension from "./Extension.js";
import Footer from "./Footer.js";
import Home from "./Home.js";
import Navbar from "./Navbar.js";
import Partners from "./Partners.js";
import Privacy from "./Privacy.js";

function Pages({ mobile }) {
  return (
    <Switch>
      <Route exact path="/">
        <Home mobile={mobile} />
      </Route>
      <Route exact path="/privacy">
        <Privacy />
      </Route>
      <Route exact path="/extension">
        <Extension />
      </Route>
      <Route exact path="/partners">
        <Partners />
      </Route>
    </Switch>
  );
}

export default function PageControl() {
  return (
    <>
      <Navbar />
      <Grid columns="equal" padded stackable divided>
        <Grid.Row only="mobile">
          <Pages mobile={true} />
        </Grid.Row>
        <Grid.Row only="computer tablet">
          <Grid.Column>
            <Pages />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Footer />
    </>
  );
}
