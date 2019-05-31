import React from 'react';
import { withRouter } from 'react-router-dom';
// import method from '../Util/axios';
// import {baseUrl} from '../Config/evn';

const  validate = function(params) {
    //判断是否有token，如果没有，，，，如果有。。。
    const token=params.match.params.token;
    const uname=params.match.params.uname;
    if(token && token!=='' ){
      //let current=localStorage.getItem('token');

      localStorage.setItem('token',token);
      localStorage.setItem('uname',uname);
      // if(token!==current){
      //   getUserInfo(token)
      // }
    }else{
        console.log('需要带上token');
    }
};

/**
 * Higher-order component (HOC) to wrap restricted pages
 */
export default function authHOC(BaseComponent) {
  class Restricted extends React.Component {
    componentWillMount() {
      this.checkAuthentication(this.props);
    }
    componentWillReceiveProps(nextProps) {
       
      if (nextProps.location !== this.props.location) {
          
        this.checkAuthentication(nextProps);
      }
    }
     checkAuthentication(params) {
        validate(params);
    }
    render() {
        return <BaseComponent {...this.props} />;
    }
  }
  return withRouter(Restricted);
}