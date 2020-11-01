import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/browser'

import { version as appVersion } from './../package.json'

import App from './App'

import './index.css'

if (process.env.NODE_ENV !== 'development') {
    Sentry.init({
        dsn: 'https://3f0f00d73d61447693024b1b0a081dd0@sentry.io/1502126',
        environment: process.env.NODE_ENV,
        release: appVersion
    })
}

ReactDOM.render(<App />, document.getElementById('root'))
