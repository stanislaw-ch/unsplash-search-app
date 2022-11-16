import {CLEAR_PICTURES, SEARCH_PICTURES, SET_LOADING} from "../types";

const handlers = {
    [SEARCH_PICTURES]: (state, {payload}) => ({...state, pictures: payload, loading: false}),
    [SET_LOADING]: state => ({...state, loading: true}),
    [CLEAR_PICTURES]: state => ({...state, pictures: []}),
    DEFAULT: (state) => state
}

export const UnsplashReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}