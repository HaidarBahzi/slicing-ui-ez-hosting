/* @refresh reload */
import {render} from 'solid-js/web'

import './index.css'
import {Route, Router} from "@solidjs/router";
import Dashboard from "./pages/dashboard.jsx";
import Setup from "./pages/setup.jsx";

const root = document.getElementById('root')

render(() => <Router>
    <Route path="/" component={Dashboard}/>
    <Route path="/setup" component={Setup}/>
</Router>, root)
