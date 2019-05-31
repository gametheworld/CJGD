
import { HOME }
from '../actions/actionTypes';



const initialState={

};
export default function reducer(state=initialState,action){
    switch(action.type){
        case HOME:{
            return {
                ...state
            };
        }
    }
    return state;
}