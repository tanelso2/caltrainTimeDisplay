import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { TimeApp } from "./containers/TimeApp";

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
      <Switch>
        <Route path="/" component={TimeApp} />
      </Switch>
    </Router>,
  document.getElementById('root')
);
