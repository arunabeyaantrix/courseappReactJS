import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchWebcards = () => (dispatch) => {

    dispatch(webcardsLoading(true));

    return fetch(baseUrl + 'webcards')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(webcards => dispatch(addWebcards(webcards)))
    .catch(error => dispatch(webcardsFailed(error.message)));
}
    


export const webcardsLoading = () => ({
    type: ActionTypes.WEBCARDS_LOADING
});


export const webcardsFailed = (errmess) => ({
    type: ActionTypes.WEBCARDS_FAILED,
    payload: errmess
});

export const addWebcards = (webcards) => ({
    type: ActionTypes.ADD_WEBCARDS,
    payload: webcards
});


export const fetchProgcards = () => (dispatch) => {

    dispatch(progcardsLoading(true));

    return fetch(baseUrl + 'progcards')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(progcards => dispatch(addProgcards(progcards)))
    .catch(error => dispatch(progcardsFailed(error.message)));
}


export const addProgcards = (progcards) => ({
    type: ActionTypes.ADD_PROGCARDS,
    payload: progcards
});

export const progcardsLoading = () => ({
    type: ActionTypes.PROGCARDS_LOADING
});


export const progcardsFailed = (errmess) => ({
    type: ActionTypes.PROGCARDS_FAILED,
    payload: errmess
});

export const fetchDraweritem = () => (dispatch) => {

    dispatch(draweritemLoading(true));

    return fetch(baseUrl + 'draweritem')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(draweritem => dispatch(addDraweritem(draweritem)))
    .catch(error => dispatch(draweritemFailed(error.message)));
}
export const addDraweritem = (draweritem) => ({
    type: ActionTypes.ADD_DRAWERITEM,
    payload: draweritem
});

export const draweritemLoading = () => ({
    type: ActionTypes.DRAWERITEM_LOADING
});


export const draweritemFailed = (errmess) => ({
    type: ActionTypes.DRAWERITEM_FAILED,
    payload: errmess
});
