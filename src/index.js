import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Connexion from './components/Connexion'
import NotFound from './components/NotFound'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Root = () => (
    <BrowserRouter>
         <Switch> {/* switch affiche qu'une seule des routes */}
            {/* quand tu es à la racine affiche le component Connexion, ne pas oublier exact*/}
            <Route exact path='/' component={ Connexion } />
            {/* chemin dynamique après les deux points, url affichant le component App */}
            <Route path='/pseudo/:pseudo' component={App} />
            {/* si on tombe sur aucune de nos pages on affiche le component NotFound */}
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
