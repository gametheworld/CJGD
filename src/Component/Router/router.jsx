import React from 'react';
import {HashRouter as Router , Route, Switch } from 'react-router-dom';
// import Index from '../Component/Index.jsx';
import Layout from '../Layout/Index';
import modelList from '../../View/ModelList/modelList';
import ModelDetail from '../../View/ModelList/ModelDetail';
/*=================
   router.jsx 组件
  专门用来管理路由的
==================*/
export const childRoutes=[
    {
      'path':'/modelList',
      'component': modelList,
      'exactly': true
    },{
      'path':'/modelDetail/:id',
      'component': ModelDetail,
      'exactly': true
    },
    
];

const RouteConfig = (
   <Router>
      <Switch>
         <Route path="/" component={Layout}/>
      </Switch>
   </Router>
 );
export default RouteConfig;
