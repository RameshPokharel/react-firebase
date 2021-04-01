import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import * as serviceWorker from './serviceWorker'

import App from './components/App'
import UseStateApp from './counter/WithUseState'
import UseReducerApp from './counter/WithUseReducer'
import RenderOptimize from './counter/RenderOptimize'
import TODOApp from './todo/App'

import Firebase, { FirebaseContext } from './components/Firebase'

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <TODOApp />
  </FirebaseContext.Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
