import React from 'react';
import {childRoutes} from '../Router/router';
import { Route, Redirect } from 'react-router-dom';
import authHOC from '../../Util/auth';


class Index extends React.Component{
    render(){
        return(
            <div>
                {childRoutes.map((route,index)=>(
                    <Route key={index} path={route.path} component={authHOC(route.component)} exactly={route.exactly} />
                ))}
            </div>
        );
    }
}
export default Index;