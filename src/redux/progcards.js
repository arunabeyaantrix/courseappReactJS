import * as ActionTypes from './ActionTypes';
const Progcards = (state = { isLoading: true,
    errMess: null,
    progcards:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROGCARDS:
            return {...state, isLoading: false, errMess: null, progcards: action.payload};

        case ActionTypes.PROGCARDS_LOADING:
            return {...state, isLoading: true, errMess: null, progcards: []}

        case ActionTypes.PROGCARDS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};

export default Progcards;  