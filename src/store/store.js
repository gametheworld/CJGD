import { applyMiddleware, createStore,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import history from './history';
// import * as reducer from './reducer';
import Reducer from '../reducers/reducer';

const middleware = applyMiddleware(thunk,routerMiddleware(history));

export default createStore(
    combineReducers({
        Reducer,
    }),
    middleware
);