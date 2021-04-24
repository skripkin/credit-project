import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import { AppRoute } from "./components";

import * as Page from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AppRoute path="/" component={Page.LandingPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
