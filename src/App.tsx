import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import * as Components from "./components";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={() =>
          <>
            <Components.Menu menuItems={[
              {
                title: "инвесторам",
                link: "investing"
              },
              {
                title: "предпринимателям",
                link: "entrepreneurs"
              },
              {
                title: "о платформе",
                link: "about-us"
              },
              {
                title: "новости",
                link: "news"
              }
            ]}/>
            <Components.Icon iconName="facebook"/>
          </>
        }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
