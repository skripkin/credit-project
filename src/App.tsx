import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";

import * as Components from "./components";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Components.AppRoute path="/" component={() => <div style={({height: "100vh"})}>Route is work</div>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
