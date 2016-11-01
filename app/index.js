import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import {Router,browserHistory} from 'react-router'
import Routes from './routes'
import Main from './components/Main'
import _Root from './containers/_Root'

ReactDOM.render(<_Root 
                  history={browserHistory} />, 
                  document.getElementById('app')
                );
