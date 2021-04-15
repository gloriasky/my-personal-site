import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/reducers";
import Projects from "./components/projects";
import Movies from "./components/Movies";
import {CreateProject} from './components/projects'
import {BrowserRouter, Switch, Route} from "react-router-dom";

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
          <Switch>
              <Route path='/projects/create'
                     render={props => <CreateProject {...props}/>}
              />
              <Route path='/projects/movies'
                     render={props => <Movies {...props}/>}
              />
              <Route path='/projects'
                     render={props => <Projects {...props}/>}
              />


              <Route path='/*'
                     render={props => <App {...props}/>}/>}
              />
          </Switch>
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
