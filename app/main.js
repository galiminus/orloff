import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blueGrey800 } from 'material-ui/styles/colors';

import "moment";
import "moment/locale/fr";

import Main from './components/main';
import { Provider } from 'react-redux';
import { updateConfiguration } from './actions/configuration';
import { loadNextPages } from './actions/pages';

import { ConnectedRouter } from 'react-router-redux'

import store from "./store";
import history from "./history";

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey800,
    primary2Color: blueGrey800
  }
});

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <ConnectedRouter history={history}>
        <Main />
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>
);

document.addEventListener("DOMContentLoaded", e => {
  store.dispatch(updateConfiguration({
    locale: "en",
    ...(store.getState().configuration || {})
  }));

  ReactDOM.render(
    <App />, document.body.appendChild(document.createElement('div'))
  );
})
