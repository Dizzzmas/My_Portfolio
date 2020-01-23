import React from 'react'
import history from "./services/history";
import Routes from "./routes";
import {Router} from 'react-router-dom';
import './css/animate.css'
import './css/icomoon.css'
import './css/bootstrap.css'
import './css/flexslider.css'
import './css/owl.carousel.min.css'
import './css/style.css'
import './css/owl.theme.default.min.css'
import './css/404.css'


function App() {


    return (
        <Router history={history}>
            <Routes/>
        </Router>

    );
}

export default App;
