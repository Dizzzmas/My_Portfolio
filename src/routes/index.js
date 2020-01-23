import React from 'react';
import {Switch} from 'react-router-dom';
import Route from "./Route";
import Index from "../components/Home";
import NotFound from "../components/Errors/404";


export default function Routes(){
    return (
        <React.Fragment>
            <Switch>
                <Route path='/' exact component={Index}/>
                <Route component={NotFound}/>
            </Switch>
        </React.Fragment>
    )
}