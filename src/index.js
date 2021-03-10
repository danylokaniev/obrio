import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//// IMPORT

import store from './redux/store'
import { BrowserRouter, Redirect } from 'react-router-dom';
import {Provider} from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Planets from './component/planets/Planets';

ReactDOM.render(
  <div>
    <BrowserRouter>
				<Provider store={store}>
							<Switch>
								<Route path="/planets" render={() => <Planets />} />
								<Route path="/planets/:id" render={() => <p>sdfsdf</p>} />
								<Redirect to="/planets"/>
							</Switch>
				</Provider>
			</BrowserRouter>
  </div>,
  document.getElementById('root')
);
