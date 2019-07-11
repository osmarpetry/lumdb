import React from 'react'
import * as Sentry from '@sentry/browser'
import { version as appVersion } from './../package.json'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration)
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError)
            })
    })
}

if (process.env.LUMDB_ENV !== 'development') {
    Sentry.init({
        dsn: 'https://3f0f00d73d61447693024b1b0a081dd0@sentry.io/1502126',
        environment: process.env.LUMDB_ENV,
        release: appVersion
    })
}

ReactDOM.render(<App />, document.getElementById('root'))
