import * as ActionTypes from './ActionTypes';
const Draweritem = (state = { draweritem:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DRAWERITEM:
            return {...state, draweritem: action.payload};

        default:
            return state;
    }
};

export default Draweritem;