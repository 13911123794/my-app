import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import routes from './config'

import RouterView from './routerviews'
export default class RouterIndex extends Component {
    render() {
        console.log(routes)
        return (
            <Router>
                <RouterView routes={routes}/>
            </Router>
        )
    }
}
