import React, { Component } from 'react';
import {Route, HashRouter, BrowserRouter, Switch,Router} from 'react-router-dom'


import Landing from './componentes/landing.js';


class RouterPrincipal extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Landing}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default RouterPrincipal;
