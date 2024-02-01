/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import { Route, Router } from "@solidjs/router";
import Dashboard from "./pages/Dashboard.jsx";
import Methods from "./pages/Methods.jsx";
import EzSetup from './pages/RemoteSetup.jsx';

const root = document.getElementById('root')

render(() => <Router>
    <Route path="/" component={Dashboard} />
    <Route path="/setup/method" component={Methods} />
    <Route path="/setup/ez" component={EzSetup}></Route>
</Router>, root)
