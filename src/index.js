import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
//import { UserAuthWrapper } from 'redux-auth-wrapper'
import { App, Home, Login, Foo } from  './components'

import './styles/core.css'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="foo" component={Foo}/>
          <Route path="login" component={Login}/>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
);
