import React, {useContext, useState} from "react";
import modules from "./Search.module.css"
import {UnsplashContext} from "../../../../context/unsplash/UnsplashContext";

function Search() {
    const [value, setValue] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const unsplash = useContext(UnsplashContext);

    const onInputChange = (event) => {
        const value = event.target.value;

        if (value.trim()) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }

        setValue(value);
    }

    const onSubmit = () => {
        unsplash.clearPictures();
        unsplash.search(value.trim());
    }

    return (
        <div className={modules.Container}>
            <input
                type="text"
                className="form-control"
                placeholder="Search for pictures..."
                value={value}
                onChange={onInputChange}
            />
            <button
                type="button"
                aria-label="Search"
                disabled={isDisabled}
                onClick={onSubmit}
            >
                Search
            </button>
        </div>
    )
}

export default Search;