/***
 * file name : reducer/index.js
 * description : reducer script
 * create date : 2019-01-09
 * creator : saltgamer
 ***/

// Imports
import {$CurrentLoading, $CurrentPage} from '../Globals';

// Actions

const CHANGE_LOADING = 'CHANGE_LOADING';
const CHANGE_PAGE = 'CHANGE_PAGE';


// Action Creators

function changeLoading() {
    return {
        type: CHANGE_LOADING
    };
}

function changePage() {
    return {
        type: CHANGE_PAGE
    };
}

// Reducer

const initialState = {
    currentLoading: true,
    currentPage: $CurrentPage
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_LOADING:
            return applyChangeLoading(state, action);
        case CHANGE_PAGE:
            return applyChangePage(state, action);
        default:
            return state;
    }
}

// Reducer Functions

function applyChangeLoading(state, action) {
    return {
        ...state,
        currentLoading: $CurrentLoading
    };
}

function applyChangePage(state, action) {
    return {
        ...state,
        currentPage: $CurrentPage
    };
}


// Exports
export const actionCreators = {
    changeLoading,
    changePage,
};
