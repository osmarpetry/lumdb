import React, { lazy, Suspense } from 'react'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'

const MoviesList = lazy(() => import('container/MovieList'))
const MovieDetails = lazy(() => import('container/MovieDetails'))

const App = () => (
    <Router>
        <div className='App'>
            <header className='App-header'>
                <Link to='/'>
                    <img src={logo} className='App-logo' alt='logo' />
                </Link>
            </header>
            <main className='App-main'>
                <Suspense fallback={<div>Lazy router loading...</div>}>
                    <Switch>
                        <Route exact path='/' component={MoviesList} />
                        <Route path='/:id' component={MovieDetails} />
                    </Switch>
                </Suspense>
            </main>
        </div>
    </Router>
)

export default App
