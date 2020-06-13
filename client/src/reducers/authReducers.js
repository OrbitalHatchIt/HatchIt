import {
    SET_CURRENT_USER,
    USER_LOADING,
    UPDATE_USERDATA
} from "../actions/types";
  
const isEmpty = require("is-empty");

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false,
    updated: false
};
  
export default function(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
        };
        case USER_LOADING:
            return {
                ...state,
                loading: true
            };
        case UPDATE_USERDATA:
            return {
                ...state,
                user: action.payload,
                updated: true
            }

        default:
            return state;
    }
}