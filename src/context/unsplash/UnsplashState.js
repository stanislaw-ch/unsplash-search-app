import React, {useReducer} from "react";
import {UnsplashContext} from "./UnsplashContext";
import {UnsplashReducer} from "./UnsplashReducer";
import {CLEAR_PICTURES, SEARCH_PICTURES, SET_LOADING} from "../types";

const CLIENT_ACCESS_KEY = process.env.REACT_APP_CLIENT_ACCESS_KEY

const withCreds = url => {
    const PAGE_AMOUNT = 20
    return `${url}&per_page=${PAGE_AMOUNT}&client_id=${CLIENT_ACCESS_KEY}`
}

export function UnsplashState({children}) {
    const initialState = {
        pictures: [],
        loading: false
    }

    const [state, dispatch] = useReducer(UnsplashReducer, initialState);

    const search = async value => {
        setLoading()

        const url = withCreds(`https://api.unsplash.com/search/photos?query=${value}`);
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

    const {pictures, loading} = state;

    return (
        <UnsplashContext.Provider  value={{search, clearPictures,  pictures, loading}}>
            {children}
        </UnsplashContext.Provider>
    )
}