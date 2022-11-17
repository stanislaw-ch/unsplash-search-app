import React, {useReducer} from "react";
import {UnsplashContext} from "./UnsplashContext";
import {UnsplashReducer} from "./UnsplashReducer";
import {CLEAR_PICTURES, SEARCH_PICTURES, SET_LOADING} from "../types";

const CLIENT_ACCESS_KEY = process.env.REACT_APP_CLIENT_ACCESS_KEY

const withCreds = (url) => {
    return `${url}&client_id=${CLIENT_ACCESS_KEY}`
}

export function UnsplashState({children}) {
    const initialState = {
        pictures: [],
        loading: false,
        pageAmount: 20
    }

    const [state, dispatch] = useReducer(UnsplashReducer, initialState);

    const search = async value => {
        const {pageAmount} = state;
        setLoading()

        const url = withCreds(`https://api.unsplash.com/search/photos?query=${value}&per_page=${pageAmount}`);
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                dispatch({
                    type: SEARCH_PICTURES,
                    payload: data.results
                })
            });
    }

    const clearPictures = () => dispatch({type: CLEAR_PICTURES})
    const setLoading = () => dispatch({type: SET_LOADING})

    const {pictures, loading, pageAmount} = state;

    return (
        <UnsplashContext.Provider  value={{search, clearPictures,  pictures, loading, pageAmount}}>
            {children}
        </UnsplashContext.Provider>
    )
}