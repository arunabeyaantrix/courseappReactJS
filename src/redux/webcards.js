import * as ActionTypes from './ActionTypes';
const Webcards = (state = { isLoading: true,
    errMess: null,
    webcards:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_WEBCARDS:
            return {...state, isLoading: false, errMess: null, webcards: action.payload};

        case ActionTypes.WEBCARDS_LOADING:
            return {...state, isLoading: true, errMess: null, webcards: []}

        case ActionTypes.WEBCARDS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};

export default Webcards;